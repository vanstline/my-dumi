---
title: Popover
group:
  title: 导航浮层
  order: 3
---

# Popover 气泡卡片

基于 antd v4 Popover，保留全部 props。支持 `glass` 玻璃效果与暗色主题。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Popover, Button } from '@my-dumi/components';

export default () => (
  <Popover title="标题" content="气泡卡片的内容区域">
    <Button>点击展开</Button>
  </Popover>
);
```

### 位置

```jsx
import React from 'react';
import { Popover, Button } from '@my-dumi/components';

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
      <Popover key={p} title={p} content="内容" placement={p}>
        <Button size="small" style={{ minWidth: 80 }}>
          {p}
        </Button>
      </Popover>
    ))}
  </div>
);
```

### 预设颜色

```jsx
import React from 'react';
import { Popover, Button } from '@my-dumi/components';

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <Popover title="粉色" content="预设色" color="pink">
      <Button size="small">pink</Button>
    </Popover>
    <Popover title="红色" content="预设色" color="red">
      <Button size="small">red</Button>
    </Popover>
    <Popover title="蓝色" content="预设色" color="blue">
      <Button size="small">blue</Button>
    </Popover>
    <Popover title="紫色" content="预设色" color="purple">
      <Button size="small">purple</Button>
    </Popover>
  </div>
);
```

### Glass 玻璃模式

```jsx
import React from 'react';
import { Popover, Button } from '@my-dumi/components';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: 16,
      padding: 40,
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    }}
  >
    <Popover title="默认模式" content="常规白色背景">
      <Button type="primary">默认 Popover</Button>
    </Popover>
    <Popover title="玻璃" content="透明背景 + 模糊效果" glass>
      <Button>Glass Popover</Button>
    </Popover>
  </div>
);
```

### 嵌套操作

```jsx
import React from 'react';
import { Popover, Button } from '@my-dumi/components';

const content = (
  <div>
    <p style={{ margin: '0 0 12px' }}>确认要删除这条数据吗？删除后不可恢复。</p>
    <div style={{ textAlign: 'right' }}>
      <Button size="small" style={{ marginRight: 8 }}>
        取消
      </Button>
      <Button size="small" type="primary" danger>
        确定
      </Button>
    </div>
  </div>
);

export default () => (
  <Popover title="确认删除" content={content} trigger="click">
    <Button danger>删除</Button>
  </Popover>
);
```

## API

继承自 antd v4 [Popover](https://4x-ant-design.antgroup.com/components/popover-cn/)，以下列出扩展 props：

| 属性  | 说明             | 类型      | 默认值  |
| ----- | ---------------- | --------- | ------- |
| glass | 是否启用玻璃效果 | `boolean` | `false` |

其余 props 与 antd Popover 完全一致。

## 设计 Token

| Token                         | 默认值                 | 说明       |
| ----------------------------- | ---------------------- | ---------- |
| `@popover-bg`                 | `@bg-color-container`  | 卡片背景色 |
| `@popover-color`              | `@text-color`          | 内容文字色 |
| `@popover-padding-horizontal` | `16px`                 | 横向内边距 |
| `@shadow-md`                  | `0 4px 12px rgba(...)` | 阴影       |
| `@radius-xs`                  | `12px`                 | 圆角       |

### 暗色模式

`[data-prefers-color='dark']` 下 `@popover-bg` 自动切换为 `@bg-color-container-dark`。

### Glass 模式

通过 CSS `backdrop-filter: blur(20px)` 实现玻璃效果，暗色下自动反转透明度和边框色。
