---
title: Switch
group:
  title: 数据录入
  order: 2
---

# Switch 开关

表单状态切换开关，支持三种尺寸与液态玻璃视觉。

## 基础用法

```tsx
import { Switch } from '@auron/components';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onChange={setChecked} />;
};
```

## 文字与加载

```tsx
import { Switch } from '@auron/components';
import React from 'react';

export default () => (
  <>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <span style={{ marginLeft: 24 }} />
    <Switch loading defaultChecked />
  </>
);
```

## 三种尺寸

```tsx
import { Switch } from '@auron/components';
import React from 'react';

export default () => (
  <>
    <Switch size="small" />
    <span style={{ marginLeft: 24 }} />
    <Switch />
    <span style={{ marginLeft: 24 }} />
    <Switch size="large" defaultChecked />
  </>
);
```

## 玻璃模式

```tsx
import { Switch } from '@auron/components';
import React from 'react';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: 24,
      padding: 40,
      backgroundImage:
        'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200)',
      backgroundSize: 'cover',
      borderRadius: 16,
      alignItems: 'center',
    }}
  >
    <Switch glass size="small" defaultChecked />
    <Switch glass defaultChecked />
    <Switch glass size="large" />
  </div>
);
```

## API

继承自 antd v4 [Switch](https://4x-ant-design.antgroup.com/components/switch-cn/)，并增加以下属性：

| 属性  | 说明                     | 类型                              | 默认值  |
| ----- | ------------------------ | --------------------------------- | ------- |
| glass | 是否启用液态玻璃底板包裹 | `boolean`                         | false   |
| size  | 开关尺寸                 | `'small' \| 'default' \| 'large'` | default |

## 尺寸规格

| 尺寸    | 宽度 | 高度 | handle 直径 | 说明     |
| ------- | ---- | ---- | ----------- | -------- |
| small   | 27px | 14px | 10px        | 紧凑场景 |
| default | 35px | 20px | 14px        | 默认     |
| large   | 44px | 24px | 16px        | 强调场景 |
