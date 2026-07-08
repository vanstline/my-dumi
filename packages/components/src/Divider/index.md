# Divider

基于 antd v4 Divider 封装，保留全部原有 props 并隔离样式。

## 代码演示

### 水平分割线

```jsx
import React from 'react';
import { Divider } from '@my-dumi/components';

export default () => (
  <>
    <p>段落 A</p>
    <Divider />
    <p>段落 B</p>
    <Divider orientation="left">左侧文字</Divider>
    <p>段落 C</p>
    <Divider orientation="right">右侧文字</Divider>
    <p>段落 D</p>
    <Divider>中间文字</Divider>
  </>
);
```

### 垂直分割线

```jsx
import React from 'react';
import { Divider } from '@my-dumi/components';

export default () => (
  <span>
    Text
    <Divider type="vertical" />
    Link
  </span>
);
```

### 虚线模式

```jsx
import React from 'react';
import { Divider } from '@my-dumi/components';

export default () => (
  <>
    <Divider dashed>虚线文字</Divider>
    <Divider dashed />
  </>
);
```

## API

> 以下表格列出常用属性。此外，**antd v4 Divider 的全部 props 均保留并透传**，详细定义请参考 antd 官方文档。

| 参数              | 说明                       | 类型                            | 默认值         |
| ----------------- | -------------------------- | ------------------------------- | -------------- |
| type              | 分割方向                   | `'horizontal' \| 'vertical'`    | `'horizontal'` |
| orientation       | 文字位置                   | `'left' \| 'right' \| 'center'` | `'center'`     |
| orientationMargin | 文字距离两端的边距         | `string \| number`              | —              |
| dashed            | 是否虚线                   | `boolean`                       | `false`        |
| plain             | 文字是否显示为普通正文样式 | `boolean`                       | `false`        |
| children          | 分割线文字内容             | `ReactNode`                     | —              |
| className         | 自定义类名                 | `string`                        | —              |
| style             | 自定义样式                 | `CSSProperties`                 | —              |
