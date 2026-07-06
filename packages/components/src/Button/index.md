## Button

基础按钮组件，支持多种类型和状态。

## 代码演示

### 基本用法

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="primary">Primary</Button>{' '}
    <Button type="default">Default</Button>{' '}
    <Button type="dashed">Dashed</Button>
  </>
);
```

### 禁用状态

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="primary" disabled>
      Disabled
    </Button>{' '}
    <Button disabled>Default Disabled</Button>
  </>
);
```

### 点击事件

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <Button type="primary" onClick={() => alert('Clicked!')}>
    Click Me
  </Button>
);
```

## API

| 参数     | 说明     | 类型                                 | 默认值      |
| -------- | -------- | ------------------------------------ | ----------- |
| children | 按钮文字 | `React.ReactNode`                    | -           |
| type     | 按钮类型 | `'primary' \| 'default' \| 'dashed'` | `'default'` |
| disabled | 是否禁用 | `boolean`                            | `false`     |
| onClick  | 点击回调 | `() => void`                         | -           |
