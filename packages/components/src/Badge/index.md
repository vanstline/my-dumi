---
title: Badge
group:
  title: 导航浮层
  order: 3
---

# Badge 徽标

基于 antd v4，状态色系统由 Design Token 接管。支持数字徽标、小红点与状态指示三种模式。

## 代码演示

### 数字徽标

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <>
    <Badge count={5}>
      <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
    </Badge>
    <span style={{ marginLeft: 24 }} />
    <Badge count={0} showZero>
      <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
    </Badge>
    <span style={{ marginLeft: 24 }} />
    <Badge count={999} overflowCount={99}>
      <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
    </Badge>
  </>
);
```

### 小红点

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <>
    <Badge dot>
      <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
    </Badge>
    <span style={{ marginLeft: 24 }} />
    <Badge dot status="processing" />
    <span style={{ marginLeft: 8 }} />
    <Badge dot status="warning" />
  </>
);
```

### 状态指示

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <>
    <Badge status="success" text="成功" />
    <br />
    <Badge status="warning" text="警告" />
    <br />
    <Badge status="error" text="错误" />
    <br />
    <Badge status="processing" text="进行中" />
    <br />
    <Badge status="default" text="默认" />
  </>
);
```

### 自定义颜色与偏移

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <Badge color="#722ed1" count={7} offset={[10, -8]}>
    <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
  </Badge>
);
```

### 动态数值

```jsx
import React, { useState } from 'react';
import { Badge } from '@auron/components';

export default () => {
  const [count, setCount] = useState(5);

  return (
    <>
      <Badge count={count}>
        <div style={{ width: 42, height: 42, background: '#f0f0f0' }} />
      </Badge>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button
          style={{
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #d9d9d9',
            cursor: 'pointer',
          }}
          onClick={() => setCount(Math.max(0, count - 1))}
        >
          −
        </button>
        <button
          style={{
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #d9d9d9',
            cursor: 'pointer',
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          style={{
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #d9d9d9',
            cursor: 'pointer',
          }}
          onClick={() => setCount(0)}
        >
          归零
        </button>
      </div>
    </>
  );
};
```

### Ribbon 缎带

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <Badge.Ribbon text="HOTS">
    <div style={{ height: 120, background: '#f0f0f0', padding: 16 }}>
      卡片内容
    </div>
  </Badge.Ribbon>
);
```

### Ribbon 位置与颜色

```jsx
import React from 'react';
import { Badge } from '@auron/components';

export default () => (
  <>
    <Badge.Ribbon text="左侧" placement="start" color="#722ed1">
      <div style={{ height: 80, background: '#f0f0f0', padding: 16 }}>
        左放置
      </div>
    </Badge.Ribbon>
    <div style={{ marginTop: 24 }} />
    <Badge.Ribbon text="右侧" placement="end" color="#f5222d">
      <div style={{ height: 80, background: '#f0f0f0', padding: 16 }}>
        右放置
      </div>
    </Badge.Ribbon>
  </>
);
```

## API

继承自 antd v4 [Badge](https://4x-ant-design.antgroup.com/components/badge-cn/)，以下列出关键 props：

| 属性          | 说明                | 类型                                                                 | 默认值      |
| ------------- | ------------------- | -------------------------------------------------------------------- | ----------- |
| count         | 显示数字            | `number` / `ReactNode`                                               | —           |
| dot           | 显示为红点          | `boolean`                                                            | `false`     |
| overflowCount | 溢出封顶值          | `number`                                                             | `99`        |
| showZero      | 数字为 0 时是否显示 | `boolean`                                                            | `false`     |
| status        | 预设状态色          | `'success'` / `'processing'` / `'error'` / `'warning'` / `'default'` | —           |
| color         | 自定义颜色          | `string`                                                             | —           |
| text          | 状态文字            | `ReactNode`                                                          | —           |
| offset        | 位置偏移            | `[number / string, number / string]`                                 | —           |
| size          | 尺寸                | `'default'` / `'small'`                                              | `'default'` |

## 状态色与 Token 映射

| status 值    | 说明   | Auron Token              |
| ------------ | ------ | ------------------------ |
| `success`    | 成功   | `@color-success` #39C02D |
| `processing` | 进行中 | `@color-primary` #319CFF |
| `error`      | 错误   | `@color-error` #F53F3F   |
| `warning`    | 警告   | `@color-warning` #FF7D00 |
| `default`    | 默认   | `@border-color`          |
