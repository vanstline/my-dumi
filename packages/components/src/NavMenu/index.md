---
title: NavMenu
group:
  title: 导航、浮层与反馈
  order: 3
---

# NavMenu 导航菜单

纵向图标导航栏，每一项 hover 或点击时在右侧弹出子面板。传入 `glass` 后，侧栏、当前项和子面板使用真实 LiquidGlass，并自动跟随明暗主题。支持 Ant Design Menu 的 `items`、`onClick`、`selectedKeys` 语义。

## 基础用法

```tsx
import { NavMenu } from '@my-dumi/components';
import React from 'react';

const bgStyle: React.CSSProperties = {
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: 40,
  borderRadius: 16,
};

const simpleIcon = (text: string) => (
  <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1 }}>{text}</span>
);

export default () => {
  const items = [
    {
      key: 'home',
      icon: simpleIcon('H'),
      label: '首页',
      children: [
        { key: 'home-1', label: '仪表盘' },
        { key: 'home-2', label: '工作台' },
      ],
    },
    {
      key: 'apps',
      icon: simpleIcon('A'),
      label: '应用',
      children: [
        { key: 'apps-1', label: '全部应用' },
        { key: 'apps-2', label: '已安装' },
        { key: 'apps-3', label: '应用市场' },
      ],
    },
    {
      key: 'settings',
      icon: simpleIcon('S'),
      label: '设置',
      children: [
        { key: 'settings-1', label: '个人设置' },
        { key: 'settings-2', label: '系统设置' },
      ],
    },
  ];

  return (
    <div style={bgStyle}>
      <NavMenu glass items={items} defaultSelectedKeys={['home-1']} />
    </div>
  );
};
```

## 叶子节点（无子菜单）

叶子节点 hover 不显示子面板，点击触发 `onClick`。

```tsx
import { NavMenu } from '@my-dumi/components';
import React from 'react';

const bgStyle: React.CSSProperties = {
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: 40,
  borderRadius: 16,
};

const simpleIcon = (text: string) => (
  <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1 }}>{text}</span>
);

export default () => {
  const items = [
    {
      key: 'home',
      icon: simpleIcon('H'),
      label: '首页',
      children: [
        { key: 'home-1', label: '仪表盘' },
        { key: 'home-2', label: '工作台' },
      ],
    },
    {
      key: 'logout',
      icon: simpleIcon('X'),
      label: '退出',
      onClick: () => console.log('logout'),
    },
  ];

  return (
    <div style={bgStyle}>
      <NavMenu glass items={items} />
    </div>
  );
};
```

## 受控模式

```tsx
import { NavMenu, Button } from '@my-dumi/components';
import React, { useState } from 'react';

const bgStyle: React.CSSProperties = {
  backgroundImage: 'url(https://picsum.photos/seed/36737/1920/1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: 40,
  borderRadius: 16,
};

const simpleIcon = (text: string) => (
  <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1 }}>{text}</span>
);

export default () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['home']);

  const items = [
    {
      key: 'home',
      icon: simpleIcon('H'),
      label: '首页',
      children: [{ key: 'home-1', label: '仪表盘' }],
    },
    {
      key: 'apps',
      icon: simpleIcon('A'),
      label: '应用',
      children: [{ key: 'apps-1', label: '全部应用' }],
    },
  ];

  return (
    <div style={bgStyle}>
      <NavMenu
        items={items}
        selectedKeys={selectedKeys}
        onSelect={(info) => setSelectedKeys(info.selectedKeys)}
      />
      <div style={{ marginTop: 16 }}>
        <Button onClick={() => setSelectedKeys(['apps'])}>选中"应用"</Button>
      </div>
    </div>
  );
};
```

## API

### NavMenu

| 属性                  | 说明                           | 类型                    | 默认值  |
| --------------------- | ------------------------------ | ----------------------- | ------- |
| `items`               | 菜单数据                       | `NavMenuItemType[]`     | `[]`    |
| `selectedKeys`        | 当前选中的菜单项 key（受控）   | `string[]`              | —       |
| `defaultSelectedKeys` | 默认选中的菜单项 key（非受控） | `string[]`              | `[]`    |
| `onSelect`            | 选中菜单项时的回调             | `MenuProps['onSelect']` | —       |
| `onClick`             | 点击一级叶子或二级菜单项时回调 | `MenuProps['onClick']`  | —       |
| `glass`               | 启用 LiquidGlass 视觉          | `boolean`               | `false` |
| `className`           | 自定义类名                     | `string`                | —       |
| `style`               | 自定义样式                     | `React.CSSProperties`   | —       |

### NavMenuItemType

| 属性       | 说明                         | 类型                     | 默认值 |
| ---------- | ---------------------------- | ------------------------ | ------ |
| `key`      | 唯一标识                     | `string`                 | —      |
| `icon`     | 图标，支持 ReactNode         | `React.ReactNode`        | —      |
| `iconName` | 图标名称（由调用方样式映射） | `string`                 | —      |
| `iconSrc`  | SVG/图片资源地址             | `string`                 | —      |
| `label`    | 一级标签 / 子面板标题        | `string`                 | —      |
| `children` | 二级菜单项                   | `NavMenuChildItemType[]` | —      |
| `onClick`  | 叶子节点点击回调             | `() => void`             | —      |

### NavMenuChildItemType

| 属性      | 说明     | 类型         |
| --------- | -------- | ------------ |
| `key`     | 唯一标识 | `string`     |
| `label`   | 显示文本 | `string`     |
| `onClick` | 点击回调 | `() => void` |
