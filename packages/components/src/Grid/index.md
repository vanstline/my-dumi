---
title: Grid
group:
  title: 基础原子
  order: 1
---

# Grid

基于 antd v4 Grid 系统封装，保留全部栅格能力（24 列、Five breakpoints 响应式、对齐等）。

## 代码演示

### 基础栅格

```jsx
import React from 'react';
import { Grid } from '@auron/components';
const { Row, Col } = Grid;

export default () => (
  <Row gutter={16}>
    <Col span={8}>
      <div style={{ background: '#5ab0ff33', padding: 12 }}>Col-8</div>
    </Col>
    <Col span={8}>
      <div style={{ background: '#722ed133', padding: 12 }}>Col-8</div>
    </Col>
    <Col span={8}>
      <div style={{ background: '#39c02d33', padding: 12 }}>Col-8</div>
    </Col>
  </Row>
);
```

### 对齐方式

```jsx
import React from 'react';
import { Grid } from '@auron/components';
const { Row, Col } = Grid;

export default () => (
  <>
    <Row
      justify="center"
      align="middle"
      style={{ height: 80, background: '#f0f0f0' }}
    >
      <Col span={4}>
        <div style={{ background: '#5ab0ff', height: 40 }}></div>
      </Col>
    </Row>
    <Row justify="space-between" style={{ marginTop: 16 }}>
      <Col span={6}>
        <div style={{ background: '#722ed1', height: 40 }}></div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#39c02d', height: 40 }}></div>
      </Col>
    </Row>
  </>
);
```

### 响应式断点

```jsx
import React from 'react';
import { Grid } from '@auron/components';
const { Row, Col } = Grid;

export default () => (
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div style={{ background: '#5ab0ff', padding: 12, textAlign: 'center' }}>
        响应式
      </div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div style={{ background: '#722ed1', padding: 12, textAlign: 'center' }}>
        响应式
      </div>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div style={{ background: '#39c02d', padding: 12, textAlign: 'center' }}>
        响应式
      </div>
    </Col>
  </Row>
);
```

## Row API

> 以下列出常用属性，**antd v4 Row 的全部 props 均保留并透传**。

| 参数      | 说明                                                                                      | 类型                                                                                  | 默认值    |
| --------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------- |
| gutter    | 栅格间隔，可写成 `px` 数值或数组 `[水平, 垂直]`，也可在对象模式下写成 `{ xs: 8, sm: 16 }` | `number \| [number, number] \| object`                                                | `0`       |
| align     | 垂直对齐方式                                                                              | `'top' \| 'middle' \| 'bottom' \| 'stretch'`                                          | `'top'`   |
| justify   | 水平排列方式                                                                              | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| wrap      | 是否自动换行                                                                              | `boolean`                                                                             | `true`    |
| className | 自定义类名                                                                                | `string`                                                                              | —         |
| style     | 自定义样式                                                                                | `CSSProperties`                                                                       | —         |

## Col API

> 以下列出常用属性，**antd v4 Col 的全部 props 均保留并透传**。

| 参数      | 说明                                                        | 类型                         | 默认值 |
| --------- | ----------------------------------------------------------- | ---------------------------- | ------ |
| span      | 栅格占位格数（0~24）                                        | `number`                     | —      |
| offset    | 左侧偏移格数（0~24）                                        | `number`                     | `0`    |
| order     | 栅格顺序                                                    | `number`                     | `0`    |
| flex      | flex 布局样式                                               | `number \| 'auto' \| string` | —      |
| push      | 向右移动格数                                                | `number`                     | `0`    |
| pull      | 向左移动格数                                                | `number`                     | `0`    |
| xs        | 屏幕 `<576px` 时的栅格配置，可写为数字或 `{ span, offset }` | `number \| object`           | —      |
| sm        | 屏幕 `≥576px` 时的栅格配置                                  | `number \| object`           | —      |
| md        | 屏幕 `≥768px` 时的栅格配置                                  | `number \| object`           | —      |
| lg        | 屏幕 `≥992px` 时的栅格配置                                  | `number \| object`           | —      |
| xl        | 屏幕 `≥1200px` 时的栅格配置                                 | `number \| object`           | —      |
| xxl       | 屏幕 `≥1600px` 时的栅格配置                                 | `number \| object`           | —      |
| className | 自定义类名                                                  | `string`                     | —      |
| style     | 自定义样式                                                  | `CSSProperties`              | —      |
