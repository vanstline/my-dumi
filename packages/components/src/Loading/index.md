---
title: Loading
group:
  title: 导航、浮层与反馈
  order: 3
---

# Loading 加载

Auron 加载指示器，完全基于 antd v4 Spin 透传，仅替换默认 indicator 为品牌 SVG，其余行为、API 与 antd Spin 完全一致。

## 基础用法

```tsx
import { Loading } from '@my-dumi/components';
import React from 'react';

export default () => <Loading />;
```

## 尺寸

```tsx
import { Loading } from '@my-dumi/components';
import React from 'react';

export default () => (
  <>
    <Loading size="small" />
    <span style={{ marginLeft: 24 }} />
    <Loading />
    <span style={{ marginLeft: 24 }} />
    <Loading size="large" />
  </>
);
```

## 自定义 SVG Indicator

传入自定义 SVG 替代默认圆点动画：

```tsx
import { Loading } from '@my-dumi/components';
import React from 'react';

const SvgIndicator = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    style={{ animation: 'auron-ant-spin-rotate 1.2s linear infinite' }}
  >
    <circle
      cx="16"
      cy="16"
      r="12"
      fill="none"
      stroke="#319cff"
      strokeWidth="3"
      strokeDasharray="60"
      strokeLinecap="round"
    />
  </svg>
);

export default () => <Loading indicator={SvgIndicator} tip="加载中…" />;
```

## Light & Dark

通过 `style` 覆盖 currentColor，让图标在不同背景上呈现不同颜色：

```tsx
import { Loading } from '@my-dumi/components';
import React from 'react';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: 20,
      padding: 24,
      background:
        'linear-gradient(135deg, rgb(90, 176, 255) 0%, rgb(114, 46, 209) 100%)',
    }}
  >
    <Loading size="large" style={{ color: '#000' }} />
    <Loading size="large" style={{ color: '#fff' }} />
  </div>
);
```

## 嵌套区域加载

在内容区域外嵌套 `Loading`，常用于异步数据加载时遮罩内容区。

```tsx
import { Loading } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setLoading(!loading)}>切换加载状态</button>
      </div>
      <Loading size="large" spinning={loading} tip="Loading…">
        <div
          style={{
            padding: 24,
            background: 'linear-gradient(135deg,#5ab0ff 0%,#722ed1 100%)',
            borderRadius: 16,
            color: '#fff',
          }}
        >
          <p>这里是被包裹的内容。</p>
          <p>嵌套模式下，Loading 会覆盖整个子区域。</p>
        </div>
      </Loading>
    </div>
  );
};
```

## API

| 属性      | 说明                                  | 类型                              | 默认值    |
| --------- | ------------------------------------- | --------------------------------- | --------- |
| spinning  | 是否加载中                            | `boolean`                         | `true`    |
| size      | 尺寸                                  | `'small' \| 'default' \| 'large'` | `default` |
| tip       | 加载提示文字                          | `ReactNode`                       | -         |
| delay     | 延迟显示加载效果（毫秒）              | `number`                          | `0`       |
| indicator | 自定义加载图标（传入单个 React 元素） | `ReactElement`                    | 品牌 SVG  |

> 其余属性继承自 antd [Spin](https://4x.ant.design/components/spin-cn/#API)。
