---
title: Checkbox
nav:
  title: 组件
  order: 1
  path: /components
---

# Checkbox 多选框

在一组备选项中进行多选。支持 `glass` 液态玻璃视觉。

## 基础用法

```tsx
import { Checkbox } from '@my-dumi/components';
import React from 'react';

export default () => (
  <>
    <Checkbox>多选 A</Checkbox>
    <Checkbox defaultChecked>多选 B</Checkbox>
    <Checkbox disabled>禁用</Checkbox>
  </>
);
```

## 多选组

```tsx
import { Checkbox } from '@my-dumi/components';
import React from 'react';

const plainOptions = ['Apple', 'Pear', 'Orange'];

export default () => {
  const [checkedList, setCheckedList] = React.useState(['Apple', 'Orange']);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={(e) => setCheckedList(e.target.checked ? plainOptions : [])}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <Checkbox.Group
        options={plainOptions}
        value={checkedList}
        onChange={(list) => setCheckedList(list as string[])}
      />
    </>
  );
};
```

## 玻璃模式

```tsx
import { Checkbox } from '@my-dumi/components';
import React from 'react';

export default () => (
  <div
    style={{
      padding: 40,
      backgroundImage:
        'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200)',
      backgroundSize: 'cover',
      borderRadius: 16,
    }}
  >
    <Checkbox.Group defaultValue={['b']}>
      <Checkbox glass value="a">
        玻璃 A
      </Checkbox>
      <Checkbox glass value="b" defaultChecked>
        玻璃 B
      </Checkbox>
      <Checkbox glass disabled value="c">
        禁用
      </Checkbox>
    </Checkbox.Group>
  </div>
);
```

## API

继承自 antd v4 [Checkbox](https://4x-ant-design.antgroup.com/components/checkbox-cn/)，并增加以下属性：

| 属性  | 说明                     | 类型      | 默认值 |
| ----- | ------------------------ | --------- | ------ |
| glass | 是否启用液态玻璃底板包裹 | `boolean` | false  |

> `Checkbox.Group` 用法与 antd 完全一致，暂不提供 `glass` 属性。
