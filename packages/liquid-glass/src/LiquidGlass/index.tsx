import React, { useEffect, useMemo, useRef, useState } from 'react';

// ═══════════════════════════════════════════════════════════════
//  liquid-glass.js (Shu Ding, 2025) 的 React 逐行复刻
//  行为一致，不加任何额外功能
// ═══════════════════════════════════════════════════════════════

// ─── Utility ───
function smoothStep(a: number, b: number, t: number): number {
  const ct = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return ct * ct * (3 - 2 * ct);
}

function dist2(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): number {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    dist2(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
}

function texture(x: number, y: number): { x: number; y: number } {
  return { x, y };
}

function generateId(): string {
  return 'liquid-glass-' + Math.random().toString(36).substr(2, 9);
}

const svgWrapId =
  `liquid-glass-svg-wrap-` + Math.random().toString(36).substr(2, 9);
// ─── Types ───

export type UV = { x: number; y: number };
export type Mouse = { x: number; y: number };
export type FragmentFn = (uv: UV, mouse: Mouse) => UV;

export interface LiquidGlassProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  fragment?: FragmentFn;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'light' | 'dark';
  /** 覆盖内置背景色 */
  background?: string;
  /** 高斯模糊强度 px，默认 5 */
  blur?: number;
  /** 圆角大小 px，默认 24 */
  radius?: number;
  /** 位移缩放 */
  displacementScale?: number;
}

// ─── Default fragment — 完全对应原版默认 shader ───
const defaultFragment: FragmentFn = (uv) => {
  const ix = uv.x - 0.5;
  const iy = uv.y - 0.5;
  const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
  const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
  const scaled = smoothStep(0, 1, displacement);
  return texture(ix * scaled + 0.5, iy * scaled + 0.5);
};

// ═══════════════════════════════════════════════════════════════
//  LiquidGlass
// ═══════════════════════════════════════════════════════════════

export default function LiquidGlass({
  children,
  width: widthProp,
  height: heightProp,
  fragment = defaultFragment,
  className = '',
  style,
  mode = 'light',
  background,
  blur,
  radius,
  displacementScale,
}: LiquidGlassProps) {
  const id = useMemo(() => generateId(), []);
  const isFixed = style?.position === 'fixed';

  // ── DOM refs ──
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const feImageRef = useRef<SVGFEImageElement | null>(null);
  const feDispRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const updateShaderRef = useRef<(() => void) | null>(null);

  const displacementScaleRef = useRef(displacementScale);
  displacementScaleRef.current = displacementScale;

  // ── Mutable state ──
  const mouse = useRef<Mouse>({ x: 0, y: 0 });
  const mouseUsed = useRef(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ sx: 0, sy: 0, initX: 0, initY: 0 });

  const canvasDPI = 1;
  const offset = 10;

  // ── 自动测量（未传 width/height 时）──
  const [measured, setMeasured] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (widthProp !== undefined && heightProp !== undefined) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setMeasured({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(container);

    // 初始值（ ResizeObserver 首次触发是异步的，先兜底 ）
    setMeasured({ w: container.offsetWidth, h: container.offsetHeight });

    return () => ro.disconnect();
  }, [widthProp, heightProp]);

  const width = widthProp ?? measured.w;
  const height = heightProp ?? measured.h;

  // ═══════ 主 Effect：width/height 就绪后创建 SVG + Canvas ═══════
  useEffect(() => {
    if (width === 0 || height === 0) return;

    const svgNS = 'http://www.w3.org/2000/svg';

    // 像素尺寸必须取整，否则 ImageData 构造会崩溃
    const wPx = Math.floor(width);
    const hPx = Math.floor(height);

    // ── 1. SVG filter ──
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');

    const defs = document.createElementNS(svgNS, 'defs');
    const filter = document.createElementNS(svgNS, 'filter');
    filter.setAttribute('id', `${id}_filter`);
    filter.setAttribute('filterUnits', 'userSpaceOnUse');
    filter.setAttribute('colorInterpolationFilters', 'sRGB');
    filter.setAttribute('x', '0');
    filter.setAttribute('y', '0');
    filter.setAttribute('width', String(wPx));
    filter.setAttribute('height', String(hPx));

    const feImage = document.createElementNS(svgNS, 'feImage');
    feImage.setAttribute('id', `${id}_map`);
    feImage.setAttribute('width', String(wPx));
    feImage.setAttribute('height', String(hPx));

    const feDisp = document.createElementNS(svgNS, 'feDisplacementMap');
    feDisp.setAttribute('in', 'SourceGraphic');
    feDisp.setAttribute('in2', `${id}_map`);
    feDisp.setAttribute('xChannelSelector', 'R');
    feDisp.setAttribute('yChannelSelector', 'G');

    filter.appendChild(feImage);
    filter.appendChild(feDisp);
    defs.appendChild(filter);
    svg.appendChild(defs);

    // ── 2. Canvas ──
    const canvas = document.createElement('canvas');
    canvas.width = wPx * canvasDPI;
    canvas.height = hPx * canvasDPI;
    canvas.style.display = 'none';

    const ctx = canvas.getContext('2d');

    // ── 3. 保存 ref ──
    svgRef.current = svg;
    canvasRef.current = canvas;
    feImageRef.current = feImage;
    feDispRef.current = feDisp;

    let svgWrapEle = document.getElementById(svgWrapId);

    if (!svgWrapEle) {
      svgWrapEle = document.createElement('div');
      svgWrapEle.id = svgWrapId;
      svgWrapEle.setAttribute('style', 'display: none;');
      document.body.appendChild(svgWrapEle);
    }
    svgWrapEle.appendChild(svg);
    svgWrapEle.appendChild(canvas);

    // ═══════════════════════════════════════════════════════════
    //  updateShader
    // ═══════════════════════════════════════════════════════════
    function updateShader() {
      if (!ctx) return;

      const feImageEl = feImageRef.current;
      const feDispEl = feDispRef.current;
      if (!feImageEl || !feDispEl) return;

      mouseUsed.current = false;
      const mouseProxy = new Proxy(mouse.current, {
        get(target, prop) {
          mouseUsed.current = true;
          return target[prop as keyof Mouse];
        },
      });

      const w = wPx * canvasDPI;
      const h = hPx * canvasDPI;
      const data = new Uint8ClampedArray(w * h * 4);
      let maxScale = 0;
      const rawValues: number[] = [];

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor(i / 4 / w);
        const pos = fragment({ x: x / w, y: y / h }, mouseProxy);
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;
        maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
        rawValues.push(dx, dy);
      }

      maxScale *= 0.5;

      let index = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = rawValues[index++] / maxScale + 0.5;
        const g = rawValues[index++] / maxScale + 0.5;
        data[i] = r * 255;
        data[i + 1] = g * 255;
        data[i + 2] = 0;
        data[i + 3] = 255;
      }

      ctx.putImageData(new ImageData(data, w, h), 0, 0);
      feImageEl.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'href',
        canvas.toDataURL(),
      );

      const scale =
        displacementScaleRef.current !== null &&
        displacementScaleRef.current !== undefined
          ? displacementScaleRef.current
          : maxScale / canvasDPI;
      feDispEl.setAttribute('scale', String(scale));
    }

    // ═══════════════════════════════════════════════════════════
    //  setupEventListeners
    // ═══════════════════════════════════════════════════════════
    function constrainPosition(x: number, y: number) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const minX = offset;
      const maxX = vw - width - offset;
      const minY = offset;
      const maxY = vh - height - offset;
      return {
        x: Math.max(minX, Math.min(maxX, x)),
        y: Math.max(minY, Math.min(maxY, y)),
      };
    }

    const container = containerRef.current;

    function onMouseDown(e: MouseEvent) {
      if (!isFixed) return;
      isDragging.current = true;
      if (container) container.style.cursor = 'grabbing';
      const rect = container!.getBoundingClientRect();
      dragStart.current = {
        sx: e.clientX,
        sy: e.clientY,
        initX: rect.left,
        initY: rect.top,
      };
      e.preventDefault();
    }

    function onMouseMove(e: MouseEvent) {
      if (isDragging.current) {
        const { sx, sy, initX, initY } = dragStart.current;
        const deltaX = e.clientX - sx;
        const deltaY = e.clientY - sy;
        const newX = initX + deltaX;
        const newY = initY + deltaY;
        const c = constrainPosition(newX, newY);
        if (container) {
          container.style.left = c.x + 'px';
          container.style.top = c.y + 'px';
          container.style.transform = 'none';
        }
      }

      if (container) {
        const rect = container.getBoundingClientRect();
        mouse.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      }

      if (mouseUsed.current) {
        updateShader();
      }
    }

    function onMouseUp() {
      if (!isFixed) return;
      isDragging.current = false;
      if (container) container.style.cursor = 'grab';
    }

    function onResize() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const c = constrainPosition(rect.left, rect.top);
      if (rect.left !== c.x || rect.top !== c.y) {
        container.style.left = c.x + 'px';
        container.style.top = c.y + 'px';
        container.style.transform = 'none';
      }
    }

    // ── 绑定事件 ──
    if (container && isFixed) {
      container.addEventListener('mousedown', onMouseDown);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    window.addEventListener('resize', onResize);

    // ── 初始 updateShader ──
    updateShader();
    updateShaderRef.current = updateShader;

    // ── 清理 ──
    return () => {
      if (container) {
        container.removeEventListener('mousedown', onMouseDown);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      svg.remove();
      canvas.remove();
      updateShaderRef.current = null;
    };
  }, [id, width, height, fragment, mode, isFixed]);

  // displacementScale 变化时重新触发 shader 更新
  useEffect(() => {
    if (updateShaderRef.current) {
      updateShaderRef.current();
    }
  }, [displacementScale]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        // position: "fixed",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        // 不传宽高时由内容撑开
        width: widthProp,
        height: heightProp,
        overflow: 'hidden',
        borderRadius: radius ?? 24,
        boxShadow:
          mode === 'dark'
            ? '0 6px 24px rgba(0,0,0,0.7), 0 -10px 25px inset rgba(0,0,0,0.55)'
            : '0 4px 8px rgba(0,0,0,0.25), 0 -10px 25px inset rgba(0,0,0,0.15)',
        cursor: isFixed ? 'grab' : 'auto',
        background:
          background ??
          (mode === 'dark'
            ? 'rgba(60, 60, 61, 0.05)'
            : 'rgba(255, 255, 255, 0.3)'),
        backdropFilter:
          mode === 'dark'
            ? `url(#${id}_filter) blur(${
                blur ?? 2
              }px) contrast(1.35) brightness(0.72) saturate(1)`
            : `url(#${id}_filter) blur(${
                blur ?? 2
              }px) contrast(1.2) brightness(1.05) saturate(1.1)`,
        border: `1px solid ${
          mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
        }`,
        zIndex: 9999,
        pointerEvents: 'auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
