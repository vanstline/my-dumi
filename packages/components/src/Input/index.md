---
title: Input
group:
  title: 表单与数据录入
  order: 5
---

# Input

基于 Ant Design v4 Input，保留原生交互和属性，并支持 `variant="glass"` CSS 玻璃变体。

## 基础用法

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => <Input placeholder="请输入内容" />;
```

## 三种尺寸

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
    <Input size="large" placeholder="Large" />
    <Input placeholder="Middle" />
    <Input size="small" placeholder="Small" />
  </div>
);
```

## 前缀与后缀

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
    <Input prefix="$" suffix="USD" placeholder="金额" />
    <Input suffix="⌕" placeholder="搜索内容" />
  </div>
);
```

## 可清除与密码

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
    <Input allowClear placeholder="可清除输入" />
    <Input.Password placeholder="密码" />
  </div>
);
```

## 状态

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input disabled placeholder="Disabled" />
  </div>
);
```

## CSS Glass

```tsx
import React from 'react';
import { Input } from '@auron/components';

const style: React.CSSProperties = {
  display: 'grid',
  gap: 12,
  maxWidth: 420,
  padding: 24,
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  borderRadius: 16,
};

export default () => (
  <div style={style}>
    <Input variant="glass" placeholder="Glass Input" />
    <Input.Password variant="glass" placeholder="Glass Password" />
    <Input.TextArea
      variant="glass"
      showCount
      maxLength={100}
      placeholder="Glass TextArea"
    />
  </div>
);
```

## TextArea

```tsx
import React from 'react';
import { Input } from '@auron/components';

export default () => (
  <Input.TextArea
    autoSize={{ minRows: 2, maxRows: 5 }}
    showCount
    maxLength={100}
  />
);
```

## API

继承 Ant Design v4 `InputProps` / `TextAreaProps`，额外支持：

| 属性      | 说明           | 类型                   | 默认值      |
| --------- | -------------- | ---------------------- | ----------- |
| `variant` | 输入框视觉变体 | `'default' \| 'glass'` | `'default'` |
