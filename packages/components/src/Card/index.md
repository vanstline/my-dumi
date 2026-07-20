---
title: Card
group:
  title: 数据展示
  order: 4
---

# Card

Auron 卡片，基于 antd v4 逻辑骨架，视觉层由 Design Token 完全接管。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Card, Button } from '@auron/components';

export default () => (
  <Card
    title="示例卡片"
    extra={
      <Button type="primary" size="small">
        更多
      </Button>
    }
  >
    这是一段卡片内容，用于展示基础卡片组件的效果。
  </Card>
);
```

### 玻璃效果

当 `glass` 设为 `true` 时，卡片外层将强制包裹 LiquidGlass 容器。

```jsx
import React from 'react';
import { Card, Button } from '@auron/components';

export default () => (
  <div
    style={{
      padding: 24,
      background: 'linear-gradient(135deg,#5ab0ff 0%,#722ed1 100%)',
    }}
  >
    <Card
      title="Glass Card"
      glass
      extra={
        <Button glass type="primary" size="small">
          更多
        </Button>
      }
    >
      卡片内容区域，背景为液态玻璃效果。
    </Card>
  </div>
);
```

### 无标题

```jsx
import React from 'react';
import { Card } from '@auron/components';

export default () => (
  <Card>无标题的纯内容卡片，适合用于简单的信息展示场景。</Card>
);
```

## API

| 参数     | 说明                     | 类型              | 默认值  |
| -------- | ------------------------ | ----------------- | ------- |
| title    | 卡片标题                 | `React.ReactNode` | -       |
| extra    | 标题区域右侧的额外操作   | `React.ReactNode` | -       |
| glass    | 是否强制启用液态玻璃背景 | `boolean`         | `false` |
| children | 卡片内容                 | `React.ReactNode` | -       |

> 其余属性继承自 antd [Card](https://4x.ant.design/components/card-cn/#API)。
