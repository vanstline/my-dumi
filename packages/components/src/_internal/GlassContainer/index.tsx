import React, { useEffect, useState } from 'react';

import { LiquidGlass, LiquidGlassProps } from '@my-dumi/liquid-glass';

export interface GlassContainerProps extends LiquidGlassProps {
  /** 子元素 */
  children?: React.ReactNode;
  /** 内边距 */
  padding?: React.CSSProperties['padding'];
}

/** 读取 dumi 全局暗色标记 data-prefers-color */
function usePrefersDark(): boolean {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const update = () =>
      setDark(root.getAttribute('data-prefers-color') === 'dark');
    update();

    const mo = new MutationObserver(update);
    mo.observe(root, {
      attributes: true,
      attributeFilter: ['data-prefers-color'],
    });

    return () => mo.disconnect();
  }, []);

  return dark;
}

/**
 * LiquidGlass 的统一封装层
 * 为所有组件提供一致的 glass 视觉容器，默认自动跟随 dumi 主题切换
 */
export default function GlassContainer({
  children,
  padding,
  mode: modeProp,
  ...rest
}: GlassContainerProps) {
  const isDark = usePrefersDark();
  const mode = modeProp ?? (isDark ? 'dark' : 'light');

  return (
    <LiquidGlass {...rest} mode={mode} style={{ padding, ...rest.style }}>
      {children}
    </LiquidGlass>
  );
}
