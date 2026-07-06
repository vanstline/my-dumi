# useToggle

布尔值切换 Hook，支持自定义 true/false 值。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';
import { useToggle } from '@my-dumi/hooks';

export default () => {
  const [open, toggle, setOpen, setClose] = useToggle(false);

  return (
    <>
      <p>当前状态：{open ? '打开' : '关闭'}</p>
      <Button type="primary" onClick={toggle}>
        切换
      </Button> <Button onClick={setOpen}>设为打开</Button> <Button onClick={setClose}>设为关闭</Button>
    </>
  );
};
```

### 自定义 true/false 值

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';
import { useToggle } from '@my-dumi/hooks';

export default () => {
  const [status, toggle] = useToggle('active', {
    trueValue: 'active',
    falseValue: 'inactive',
  });

  return (
    <>
      <p>当前状态：{status}</p>
      <Button type="primary" onClick={toggle}>
        切换
      </Button>
    </>
  );
};
```

## API

```ts
function useToggle<T>(
  defaultValue: T,
  options?: { trueValue?: any; falseValue?: any },
): readonly [T, (value?: T) => void, () => void, () => void];
```

| 返回值   | 说明                         | 类型                  |
| -------- | ---------------------------- | --------------------- |
| state    | 当前状态值                   | `T`                   |
| toggle   | 切换函数（可传入值直接设置） | `(value?: T) => void` |
| setTrue  | 设为 true 值                 | `() => void`          |
| setFalse | 设为 false 值                | `() => void`          |
