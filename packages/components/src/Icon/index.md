---
title: Icon
group:
  title: 基础原子
  order: 1
---

# Icon

基于 `lucide-react` 的图标封装，支持玻璃容器包裹。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Icon } from '@my-dumi/components';

export default () => (
  <>
    <Icon name="heart" size={24} />
    <Icon name="settings" size={24} />
    <Icon name="search" size={24} />
  </>
);
```

## API

| 参数      | 说明                      | 类型            | 默认值 |
| --------- | ------------------------- | --------------- | ------ |
| name      | 图标名称（lucide 组件名） | `string`        | —      |
| size      | 图标尺寸                  | `number`        | `16`   |
| color     | 自定义颜色                | `string`        | —      |
| className | 自定义类名                | `string`        | —      |
| style     | 自定义样式                | `CSSProperties` | —      |
| onClick   | 点击回调                  | `() => void`    | —      |
