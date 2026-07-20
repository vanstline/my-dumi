# useLocalStorage

与 localStorage 同步的状态 Hook，自动 JSON 序列化/反序列化。

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Button } from '@auron/components';
import { useLocalStorage } from '@auron/hooks';

export default () => {
  const [value, setValue, remove] = useLocalStorage('demo-key', 'hello');

  return (
    <>
      <p>当前值：{value}</p>
      <Button type="primary" onClick={() => setValue(Date.now().toString())}>
        更新时间戳
      </Button> <Button onClick={remove}>清除</Button>
    </>
  );
};
```

## API

```ts
function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): readonly [T, (value: T | ((prev: T) => T)) => void, () => void];
```

| 返回值      | 说明                             | 类型                                     |
| ----------- | -------------------------------- | ---------------------------------------- |
| storedValue | 当前存储值                       | `T`                                      |
| setValue    | 设置新值（支持函数式更新）       | `(value: T \| ((prev: T) => T)) => void` |
| removeValue | 从 localStorage 移除并恢复默认值 | `() => void`                             |
