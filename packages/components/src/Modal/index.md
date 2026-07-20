---
title: Modal
group:
  title: 导航、浮层与反馈
  order: 3
---

# Modal 对话框

基于 antd v4 Modal 完全透传，保留全部 props，视觉层由 Design Token 接管。

## 基础用法

```tsx
import { Modal, Button } from '@auron/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开基础弹窗
      </Button>
      <Modal
        title="基础弹窗"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>这是一段示例内容...</p>
        <p>这是第二段内容...</p>
        <p>这是第三段内容...</p>
      </Modal>
    </>
  );
};
```

## Glass 模式

通过 `glass` 属性启用液态玻璃背景效果。

```tsx
import { Modal, Button } from '@auron/components';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开 Glass 弹窗
      </Button>
      <Modal
        glass
        title="Glass 弹窗"
        open={open}
        onOk={(e) => {
          setOpen(false);
        }}
        onCancel={(e) => {
          setOpen(false);
        }}
      >
        <p>此弹窗使用了液态玻璃背景效果。</p>
      </Modal>
    </>
  );
};
```

## 确认对话框

```tsx
import { Modal, Button } from '@auron/components';
import React from 'react';

export default () => {
  const showConfirm = () => {
    Modal.confirm({
      title: '确认删除？',
      content: '点击确定后将在 1 秒后关闭对话框。',
      onOk() {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
      onCancel() {},
    });
  };

  return <Button onClick={showConfirm}>确认对话框</Button>;
};
```

## API

### Modal

| 属性  | 说明                 | 类型      | 默认值  |
| ----- | -------------------- | --------- | ------- |
| glass | 是否启用液态玻璃效果 | `boolean` | `false` |

> 其余属性继承自 antd [Modal](https://4x.ant.design/components/modal-cn/#API)。

### Modal.xxx

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上静态方法与 antd Modal 的同名方法完全一致，参数均为 antd [ModalFuncProps](https://4x.ant.design/components/modal-cn/#ModalFuncProps)。

此外还支持：

- `Modal.destroyAll`
- `Modal.useModal`
- `Modal.config`
