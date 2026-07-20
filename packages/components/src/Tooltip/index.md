---
title: Tooltip
group:
  title: 导航浮层
  order: 3
---

# Tooltip 文字提示

基于 antd v4 Tooltip，保留全部 props。支持 `glass` 玻璃效果与暗色主题。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Tooltip, Button } from '@auron/components';

export default () => (
  <Tooltip title="这是一段提示文案">
    <span style={{ color: '@color-primary', cursor: 'pointer' }}>
      鼠标移上来
    </span>
  </Tooltip>
);
```

### 位置

```jsx
import React from 'react';
import { Tooltip, Button } from '@auron/components';

const placements = [
  'top',
  'topLeft',
  'topRight',
  'right',
  'rightTop',
  'rightBottom',
  'bottom',
  'bottomLeft',
  'bottomRight',
  'left',
  'leftTop',
  'leftBottom',
];

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
    {placements.map((p) => (
      <Tooltip key={p} title={p} placement={p}>
        <Button size="small" style={{ minWidth: 80 }}>
          {p}
        </Button>
      </Tooltip>
    ))}
  </div>
);
```

### 预设颜色

```jsx
import React from 'react';
import { Tooltip, Button } from '@auron/components';

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <Tooltip title="粉色" color="pink">
      <Button size="small">pink</Button>
    </Tooltip>
    <Tooltip title="红色" color="red">
      <Button size="small">red</Button>
    </Tooltip>
    <Tooltip title="橙色" color="orange">
      <Button size="small">orange</Button>
    </Tooltip>
    <Tooltip title="绿色" color="green">
      <Button size="small">green</Button>
    </Tooltip>
    <Tooltip title="蓝色" color="blue">
      <Button size="small">blue</Button>
    </Tooltip>
    <Tooltip title="紫色" color="purple">
      <Button size="small">purple</Button>
    </Tooltip>
  </div>
);
```

### Glass 玻璃模式

```jsx
import React from 'react';
import { Tooltip, Button } from '@auron/components';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: 16,
      padding: 40,
      background: 'linear-gradient(135deg, #a8c0ff, #3f2b96)',
    }}
  >
    <Tooltip title="默认模式" placement="top">
      <Button type="primary">默认 Tooltip</Button>
    </Tooltip>
    <Tooltip title="玻璃模式" placement="top" glass>
      <Button>Glass Tooltip</Button>
    </Tooltip>
  </div>
);
```

### 受控模式

```jsx
import React, { useState } from 'react';
import { Tooltip, Button } from '@auron/components';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="点击按钮控制显示/隐藏" open={open} onOpenChange={setOpen}>
        <span>受控提示目标</span>
      </Tooltip>
      <Button onClick={() => setOpen(!open)} style={{ marginLeft: 16 }}>
        切换
      </Button>
    </>
  );
};
```

## API

继承自 antd v4 [Tooltip](https://4x-ant-design.antgroup.com/components/tooltip-cn/)，以下列出扩展 props：

| 属性  | 说明             | 类型      | 默认值  |
| ----- | ---------------- | --------- | ------- |
| glass | 是否启用玻璃效果 | `boolean` | `false` |

其余 props 与 antd Tooltip 完全一致。

## 设计 Token

| Token            | 默认值                 | 说明       |
| ---------------- | ---------------------- | ---------- |
| `@tooltip-bg`    | `rgba(0, 0, 0, 0.75)`  | 提示背景色 |
| `@tooltip-color` | `#fff`                 | 提示文字色 |
| `@shadow-md`     | `0 4px 12px rgba(...)` | 阴影       |
| `@radius-xs`     | `12px`                 | 圆角       |

### 暗色模式

`[data-prefers-color='dark']` 下 `@tooltip-bg` 自动切换为 `#434343`。

### Glass 模式

通过 CSS `backdrop-filter: blur(20px)` 实现玻璃效果，透明背景 + 白色半透明边框，暗色下自动反转透明度和边框色。
