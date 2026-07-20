---
title: Radio
group:
  title: 数据录入
  order: 2
---

# Radio 单选框

在一组备选项中进行单选。支持 `glass` 液态玻璃视觉。

## 基础用法

```tsx
import { Radio } from '@auron/components';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(1);
  return (
    <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
      <Radio value={1}>选项 A</Radio>
      <Radio value={2}>选项 B</Radio>
      <Radio value={3}>选项 C</Radio>
    </Radio.Group>
  );
};
```

## 禁用状态

```tsx
import { Radio } from '@auron/components';
import React from 'react';

export default () => (
  <>
    <Radio disabled>禁用未选</Radio>
    <Radio disabled defaultChecked>
      禁用已选
    </Radio>
  </>
);
```

## 玻璃模式

```tsx
import { Radio } from '@auron/components';
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
    <Radio.Group defaultValue="a">
      <Radio glass value="a">
        玻璃 A
      </Radio>
      <Radio glass value="b" defaultChecked>
        玻璃 B
      </Radio>
      <Radio glass disabled value="c">
        禁用
      </Radio>
    </Radio.Group>
  </div>
);
```

## API

继承自 antd v4 [Radio](https://4x-ant-design.antgroup.com/components/radio-cn/)，并增加以下属性：

| 属性  | 说明                                                  | 类型      | 默认值 |
| ----- | ----------------------------------------------------- | --------- | ------ |
| glass | 是否启用液态玻璃视觉（只作用于当前 Radio inner 元素） | `boolean` | false  |

> `Radio.Group` 已自动注入 `auron-ant` 前缀。
