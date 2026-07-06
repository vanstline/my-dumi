# Card

基础卡片组件，支持标题、内容和底部操作栏。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Card, Button } from '@my-dumi/components';

export default () => (
  <Card title="示例卡片">这是一段卡片内容，用于展示基础卡片组件的效果。</Card>
);
```

### 带操作栏

```jsx
import React from 'react';
import { Card, Button } from '@my-dumi/components';

export default () => (
  <Card
    title="带操作栏的卡片"
    extra={
      <>
        <Button type="primary" size="small">
          确认
        </Button>{' '}
        <Button size="small">取消</Button>
      </>
    }
  >
    卡片内容区域，支持自定义底部操作按钮。
  </Card>
);
```

### 无标题

```jsx
import React from 'react';
import { Card } from '@my-dumi/components';

export default () => (
  <Card>无标题的纯内容卡片，适合用于简单的信息展示场景。</Card>
);
```

## API

| 参数     | 说明       | 类型              | 默认值 |
| -------- | ---------- | ----------------- | ------ |
| title    | 卡片标题   | `React.ReactNode` | -      |
| children | 卡片内容   | `React.ReactNode` | -      |
| extra    | 底部操作栏 | `React.ReactNode` | -      |
