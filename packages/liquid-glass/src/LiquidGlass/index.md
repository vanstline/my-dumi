## LiquidGlass

苹果液态玻璃效果的 React 组件，基于 SVG feDisplacementMap 像素级位移实现。

> 💡 所有 demo 自动跟随 dumi 文档主题切换 `mode`。

## 代码演示

### 基本用法

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  return (
    <LiquidGlass
      width={200}
      height={120}
      mode={color === 'dark' ? 'dark' : 'light'}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello LiquidGlass
      </div>
    </LiquidGlass>
  );
};
```

### 内容驱动（不指定宽高）

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  return (
    <LiquidGlass mode={color === 'dark' ? 'dark' : 'light'}>
      <div
        style={{
          padding: '16px 24px',
          textAlign: 'center',
        }}
      >
        由内容自动撑开尺寸
      </div>
    </LiquidGlass>
  );
};
```

### 深色模式（强制 dark，不受主题影响）

```tsx
import React from 'react';
import { LiquidGlass } from '@auron/liquid-glass';
const seed = Math.floor(Math.random() * 100000);

export default () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 200,
      background: `url('https://picsum.photos/seed/${seed}/1920/1080')`,
      minWidth: 200,
    }}
  >
    <LiquidGlass width={200} height={120} mode="dark">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        Dark Mode
      </div>
    </LiquidGlass>
  </div>
);
```

### 自定义模糊与圆角

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  const mode = color === 'dark' ? 'dark' : 'light';
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <LiquidGlass width={96} height={96} blur={2} radius={48} mode={mode}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
          }}
        >
          blur=2
        </div>
      </LiquidGlass>
      <LiquidGlass width={96} height={96} blur={12} radius={12} mode={mode}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
          }}
        >
          blur=12
        </div>
      </LiquidGlass>
    </div>
  );
};
```

### 自定义背景色

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  const mode = color === 'dark' ? 'dark' : 'light';
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {[
        'rgba(255, 100, 100, 0.3)',
        'rgba(100, 200, 255, 0.3)',
        'rgba(150, 255, 150, 0.3)',
      ].map((bg) => (
        <LiquidGlass
          key={bg}
          width={60}
          height={60}
          background={bg}
          mode={mode}
        >
          <div style={{ width: '100%', height: '100%' }} />
        </LiquidGlass>
      ))}
    </div>
  );
};
```

### 自定义 Fragment 折射函数

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  return (
    <LiquidGlass
      width={200}
      height={100}
      radius={50}
      mode={color === 'dark' ? 'dark' : 'light'}
      fragment={(uv) => {
        const ix = uv.x - 0.5;
        const iy = uv.y - 0.5;
        const dist = Math.sqrt(ix * ix + iy * iy);
        const disp = Math.max(0, 0.5 - dist);
        const s = disp * 3;
        return { x: ix * s + 0.5, y: iy * s + 0.5 };
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
        }}
      >
        环形折射效果
      </div>
    </LiquidGlass>
  );
};
```

### 可拖拽效果

```tsx
import React from 'react';
import { usePrefersColor } from 'dumi';
import { LiquidGlass } from '@auron/liquid-glass';

export default () => {
  const [color] = usePrefersColor();
  return (
    <div style={{ height: 320, position: 'relative', overflow: 'hidden' }}>
      <LiquidGlass
        width={200}
        height={140}
        radius={24}
        mode={color === 'dark' ? 'dark' : 'light'}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 700 }}>Try Me ✨</span>
          <span style={{ fontSize: 12 }}>点击并拖拽此卡片</span>
        </div>
      </LiquidGlass>
    </div>
  );
};
```

## API

| 参数              | 说明                                    | 类型                  | 默认值       |
| ----------------- | --------------------------------------- | --------------------- | ------------ |
| children          | 卡片内部内容                            | `React.ReactNode`     | -            |
| width             | 固定宽度（px），不传则由内容/容器自适应 | `number`              | `undefined`  |
| height            | 固定高度（px），不传则由内容/容器自适应 | `number`              | `undefined`  |
| mode              | 配色模式                                | `'light' \| 'dark'`   | `'light'`    |
| background        | 覆盖默认半透明背景色                    | `string`              | 按 mode      |
| blur              | 高斯模糊半径（px）                      | `number`              | `5`          |
| radius            | 圆角大小（px）                          | `number`              | `24`         |
| displacementScale | 位移缩放（默认自动计算）                | `number`              | `undefined`  |
| fragment          | 自定义折射函数                          | `FragmentFn`          | 默认圆角矩形 |
| className         | 额外的 CSS class                        | `string`              | `''`         |
| style             | 内联样式（如 position、transform 等）   | `React.CSSProperties` | -            |

## 类型定义

```ts
type UV = { x: number; y: number };
type Mouse = { x: number; y: number };
type FragmentFn = (uv: UV, mouse: Mouse) => UV;

interface LiquidGlassProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  fragment?: FragmentFn;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'light' | 'dark';
  background?: string;
  blur?: number;
  radius?: number;
  displacementScale?: number;
}
```
