---
title: Message
group:
  title: 导航、浮层与反馈
  order: 3
---

# Message 全局提示

基于 antd v4 message 完全透传，保留全部 API，视觉层由 Design Token 接管。

消息卡片默认强制使用液态玻璃效果，无需额外配置。

## 基础用法

```tsx
import { Message, Button } from '@my-dumi/components';
import React from 'react';

export default () => (
  <Button type="primary" onClick={() => Message.success('这是一条成功提示')}>
    显示成功提示
  </Button>
);
```

## 不同类型的提示

```tsx
import { Message, Button, Space } from '@my-dumi/components';
import React from 'react';

export default () => {
  const success = () => Message.success('This is a success message');
  const error = () => Message.error('This is an error message');
  const warning = () => Message.warning('This is a warning message');
  const info = () => Message.info('This is an info message');
  const loading = () => {
    const hide = Message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };

  return (
    <Space wrap>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
      <Button onClick={info}>Info</Button>
      <Button onClick={loading}>Loading</Button>
    </Space>
  );
};
```

## 修改时长

```tsx
import { Message, Button } from '@my-dumi/components';
import React from 'react';

export default () => (
  <Button
    onClick={() =>
      Message.success('This message will disappear in 10 seconds', 10)
    }
  >
    自定义时长
  </Button>
);
```

## API

Message 提供以下静态方法：

| 方法                                            | 说明          | 参数                            |
| ----------------------------------------------- | ------------- | ------------------------------- |
| `Message.success(content, [duration], onClose)` | 成功提示      | content: `string \| ReactNode`  |
| `Message.error(content, [duration], onClose)`   | 错误提示      | duration: `number` (秒，默认 3) |
| `Message.warning(content, [duration], onClose)` | 警告提示      | onClose: `() => void`           |
| `Message.info(content, [duration], onClose)`    | 信息提示      |                                 |
| `Message.loading(content, [duration], onClose)` | 加载提示      |                                 |
| `Message.open(config)`                          | 自定义配置    | config: `ArgsProps`             |
| `Message.config(options)`                       | 全局配置      | options: `ConfigOptions`        |
| `Message.destroy()`                             | 销毁所有提示  |                                 |
| `Message.useMessage()`                          | Hook 方式调用 | 返回 `[api, contextHolder]`     |

> 其余配置继承自 antd [message](https://4x.ant.design/components/message-cn/#API)。
