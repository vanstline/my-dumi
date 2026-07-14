---
title: Drawer
group:
  title: 导航、浮层与反馈
  order: 3
---

# Drawer 抽屉

基于 antd v4 Drawer 完全透传，保留全部 props，视觉层由 Design Token 接管。

默认在标题栏右侧渲染取消/确定按钮（可通过 `extra` 覆盖或 `footer` 补充额外内容）。

## 基础用法

```tsx
import { Drawer, Button } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开基础抽屉
      </Button>
      <Drawer
        title="基础抽屉"
        placement="right"
        width={400}
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>这是一段示例内容...</p>
        <p>这是第二段内容...</p>
        <p>这是第三段内容...</p>
      </Drawer>
    </>
  );
};
```

## 四向位置

```tsx
import { Drawer, Button } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [placement, setPlacement] = useState('right');
  const [open, setOpen] = useState(false);

  const placements = ['left', 'top', 'right', 'bottom'];

  return (
    <>
      {placements.map((p) => (
        <Button
          key={p}
          type={placement === p ? 'primary' : 'default'}
          onClick={() => {
            setPlacement(p);
            setOpen(true);
          }}
          style={{ marginRight: 8, marginBottom: 8 }}
        >
          {p}
        </Button>
      ))}
      <Drawer
        title={`${placement} 抽屉`}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>当前 placement: {placement}</p>
      </Drawer>
    </>
  );
};
```

## Glass 模式

通过 `glass` 属性启用液态玻璃背景效果。

默认操作按钮会自动同步 `glass` 状态。

```tsx
import { Drawer, Button } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开 Glass 抽屉
      </Button>
      <Drawer
        glass
        title="Glass 抽屉"
        placement="right"
        width={400}
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>此抽屉使用了液态玻璃背景效果。</p>
      </Drawer>
    </>
  );
};
```

## 自定义顶部操作区

通过 `extra` 属性完全覆盖默认的取消/确定按钮。

```tsx
import { Drawer, Button } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        自定义操作区
      </Button>
      <Drawer
        glass
        title="自定义操作"
        placement="right"
        width={400}
        open={open}
        onClose={() => setOpen(false)}
        extra={
          <Button type="primary" glass>
            保存草稿
          </Button>
        }
      >
        <p>extra 已完全覆盖默认按钮。</p>
      </Drawer>
    </>
  );
};
```

## 底部内容区

`footer` 独立于默认操作按钮，可用于展示额外信息或辅助操作。

```tsx
import { Drawer, Button, Switch } from '@my-dumi/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开带底部区抽屉
      </Button>
      <Drawer
        glass
        title="底部信息区"
        placement="right"
        width={400}
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
        footer={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>
              自动保存: 2026-07-14 10:30
            </span>
            <Switch size="small" defaultChecked />
          </div>
        }
      >
        <p>内容区域...</p>
      </Drawer>
    </>
  );
};
```

## API

| 属性              | 说明                 | 类型                                             | 默认值      |
| ----------------- | -------------------- | ------------------------------------------------ | ----------- |
| glass             | 是否启用液态玻璃效果 | `boolean`                                        | `false`     |
| okText            | 确认按钮文字         | `string`                                         | `'确定'`    |
| cancelText        | 取消按钮文字         | `string`                                         | `'取消'`    |
| okType            | 确认按钮类型         | `'primary' \| 'default' \| 'dashed' \| 'danger'` | `'primary'` |
| okButtonProps     | 确认按钮 props       | `ButtonProps`                                    | -           |
| cancelButtonProps | 取消按钮 props       | `ButtonProps`                                    | -           |
| confirmLoading    | 确认按钮 loading     | `boolean`                                        | `false`     |
| onOk              | 点击确认回调         | `(e) => void`                                    | -           |

> 其余属性继承自 antd [Drawer](https://4x.ant.design/components/drawer-cn/#API)。
