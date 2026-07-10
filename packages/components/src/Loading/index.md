---
title: Loading
group:
  title: 导航、浮层与反馈
  order: 3
---

# Loading 加载

Auron 加载指示器，基于 antd v4 Spin，支持自定义 SVG indicator、嵌套 glass 遮罩与暗色主题。

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
    style={{ animation: 'auron-spin-rotate 1.2s linear infinite' }}
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

## 嵌套 Glass 遮罩

在内容区域外嵌套 `Loading`，并开启 `glass`，遮罩层将呈现毛玻璃质感：

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
      <Loading spinning={loading} glass tip="Glass Loading…">
        <div
          style={{
            padding: 24,
            background: 'linear-gradient(135deg,#5ab0ff 0%,#722ed1 100%)',
            borderRadius: 16,
            color: '#fff',
          }}
        >
          <p>这里是被包裹的内容。</p>
          <p>开启 glass 后，遮罩层会呈现毛玻璃效果。</p>
        </div>
      </Loading>
    </div>
  );
};
```

## 带提示文字

```tsx
import { Loading } from '@my-dumi/components';
import React from 'react';

export default () => (
  <>
    <Loading tip="加载中…" />
    <span style={{ marginLeft: 40 }} />
    <Loading tip="请稍候" size="large" />
  </>
);
```

## API

| 属性             | 说明                                  | 类型                              | 默认值    |
| ---------------- | ------------------------------------- | --------------------------------- | --------- |
| spinning         | 是否加载中                            | `boolean`                         | `true`    |
| size             | 尺寸                                  | `'small' \| 'default' \| 'large'` | `default` |
| tip              | 加载提示文字                          | `ReactNode`                       | -         |
| delay            | 延迟显示加载效果（毫秒）              | `number`                          | `0`       |
| indicator        | 自定义加载图标（传入单个 React 元素） | `ReactElement`                    | -         |
| wrapperClassName | 包装器的 CSS 类                       | `string`                          | -         |
| glass            | 嵌套模式下遮罩层是否启用 glass        | `boolean`                         | `false`   |

> 其余属性继承自 antd [Spin](https://4x.ant.design/components/spin-cn/#API)。
