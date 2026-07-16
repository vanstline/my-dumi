---
title: Tag
group:
  title: 数据展示
  order: 4
---

# Tag 标签

基于 Ant Design v4 Tag，支持 `filled`、`outlined`、`glass` 三种变体、真实 LiquidGlass、图标和动态关闭。状态点与状态文字请使用 `Badge`。

## 常规模式

```tsx
import React from 'react';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons';
import { Tag } from '@my-dumi/components';

const colors = ['red', 'green', 'orange', 'blue', 'cyan', 'default', 'purple'];

export default () => (
  <div>
    {colors.map((color, index) => (
      <div key={color}>
        <Tag color={color}>{color} 无图标</Tag>
        <Tag
          color={color}
          icon={index % 2 ? <CheckCircleFilled /> : <InfoCircleFilled />}
        >
          {color} 图标
        </Tag>
        <Tag
          color={color}
          closable
          icon={index % 2 ? <CheckCircleFilled /> : <CloseCircleFilled />}
        >
          {color} 可关闭
        </Tag>
      </div>
    ))}
  </div>
);
```

## 动态关闭和新增

```tsx
import React, { useState } from 'react';
import { Button, Tag } from '@my-dumi/components';

export default () => {
  const [tags, setTags] = useState(['标签一', '标签二']);
  const [newTag, setNewTag] = useState(3);
  const addTag = () => setTags([...tags, `新标签 ${newTag}`]);

  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          closable
          onClose={() => setTags(tags.filter((item) => item !== tag))}
        >
          {tag}
        </Tag>
      ))}
      <Button
        onClick={() => {
          addTag();
          setNewTag(newTag + 1);
        }}
      >
        新增标签
      </Button>
    </>
  );
};
```

## Glass 模式

```tsx
import React from 'react';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons';
import { Tag } from '@my-dumi/components';

const backgroundStyle: React.CSSProperties = {
  padding: 24,
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 16,
};
const colors = ['red', 'green', 'orange', 'blue', 'cyan', 'default', 'purple'];

export default () => (
  <div style={backgroundStyle}>
    {colors.map((color, index) => (
      <div key={color}>
        <Tag glass color={color}>
          {color} 无图标
        </Tag>
        <Tag
          glass
          color={color}
          icon={index % 2 ? <CheckCircleFilled /> : <InfoCircleFilled />}
        >
          {color} 图标
        </Tag>
        <Tag
          glass
          color={color}
          closable
          icon={index % 2 ? <CheckCircleFilled /> : <CloseCircleFilled />}
        >
          {color} 可关闭
        </Tag>
      </div>
    ))}
  </div>
);
```

## Variant 变体

```tsx
import React from 'react';
import { Tag } from '@my-dumi/components';

const backgroundStyle: React.CSSProperties = {
  padding: 24,
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 16,
};

export default () => (
  <div style={backgroundStyle}>
    <Tag color="red" variant="filled">
      Filled
    </Tag>
    <Tag color="red" variant="outlined">
      Outlined
    </Tag>
    <Tag color="red" variant="glass">
      CSS Glass
    </Tag>
  </div>
);
```

`glass` 优先级高于 `variant`；同时传入时使用真实 LiquidGlass。

## CheckableTag

```tsx
import React, { useState } from 'react';
import { Tag } from '@my-dumi/components';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Tag.CheckableTag checked={checked} onChange={setChecked}>
      可选标签
    </Tag.CheckableTag>
  );
};
```

## API

继承 Ant Design v4 `TagProps`，额外支持：

| 属性       | 说明                             | 类型                                | 默认值     |
| ---------- | -------------------------------- | ----------------------------------- | ---------- |
| `glass`    | 启用真实 LiquidGlass             | `boolean`                           | `false`    |
| `variant`  | 普通视觉变体；`glass` 模式下忽略 | `'filled' \| 'outlined' \| 'glass'` | `'filled'` |
| `iconName` | 图标名称                         | `string`                            | —          |
| `iconSrc`  | SVG/图片资源地址                 | `string`                            | —          |
