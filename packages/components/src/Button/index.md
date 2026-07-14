---
title: Button
group:
  title: 数据录入
  order: 2
---

# Button

Auron 按钮，基于 antd v4 逻辑骨架，视觉层由 Design Token 完全接管。

## 代码演示

### 基本用法

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="primary">Primary</Button> <Button>Default</Button>{' '}
    <Button type="dashed">Dashed</Button> <Button type="danger">Danger</Button>
  </>
);
```

### Link 与 Text

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="link">Link</Button> <Button type="text">Text</Button>
  </>
);
```

### Ghost 幽灵模式

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <div
    style={{
      padding: 24,
      background: '#333',
    }}
  >
    <Button ghost>Default</Button>{' '}
    <Button ghost type="primary">
      Primary
    </Button>{' '}
    <Button ghost type="danger">
      Danger
    </Button>{' '}
    <Button ghost type="link">
      Link
    </Button>{' '}
    <Button ghost type="text">
      Text
    </Button>
  </div>
);
```

### 尺寸

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="primary" size="small">
      Small
    </Button>{' '}
    <Button type="primary" size="middle">
      Middle
    </Button>{' '}
    <Button type="primary" size="large">
      Large
    </Button>
  </>
);
```

### 玻璃效果

当 `glass` 设为 `true` 时，按钮外层将包裹 LiquidGlass 容器。

`glass` 模式下，`primary` 和 `danger` 类型会保留各自的品牌色和错误色（半透明显示），其余类型统一使用白字透明底。

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <div
    style={{
      padding: 24,
      background: 'linear-gradient(135deg,#5ab0ff 0%,#722ed1 100%)',
    }}
  >
    <Button type="primary" glass>
      Glass Primary
    </Button>{' '}
    <Button glass>Glass Default</Button>{' '}
    <Button type="danger" glass>
      Glass Danger
    </Button>{' '}
    <Button type="link" glass>
      Glass Link
    </Button>{' '}
    <Button type="text" glass>
      Glass Text
    </Button>
  </div>
);
```

### 禁用状态

```jsx
import React from 'react';
import { Button } from '@my-dumi/components';

export default () => (
  <>
    <Button type="primary" disabled>
      Primary Disabled
    </Button>{' '}
    <Button disabled>Default Disabled</Button>{' '}
    <Button type="danger" disabled>
      Danger Disabled
    </Button>{' '}
    <Button type="link" disabled>
      Link Disabled
    </Button>
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

| 参数     | 说明                 | 类型                                                                 | 默认值      |
| -------- | -------------------- | -------------------------------------------------------------------- | ----------- |
| type     | 按钮类型             | `'primary' \| 'default' \| 'dashed' \| 'danger' \| 'link' \| 'text'` | `'default'` |
| size     | 按钮尺寸             | `'small' \| 'middle' \| 'large'`                                     | `'middle'`  |
| glass    | 是否启用液态玻璃背景 | `boolean`                                                            | `false`     |
| ghost    | 幽灵模式             | `boolean`                                                            | `false`     |
| disabled | 是否禁用             | `boolean`                                                            | `false`     |
| onClick  | 点击回调             | `(event) => void`                                                    | -           |

> 其余属性继承自 antd [Button](https://4x.ant.design/components/button-cn/#API)，事件与无障碍特性完全复用 antd 实现。
