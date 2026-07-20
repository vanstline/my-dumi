---
title: Tabs
group:
  title: 导航、浮层与反馈
  order: 3
---

# Tabs 选项卡

完全基于 antd v4 Tabs 透传，仅注入 auron-ant 前缀，支持所有 antd Tabs 原生能力与 API。

## 基础用法

默认展示 `top` 定位的基础选项卡。

```tsx
import { Tabs } from '@auron/components';
import React from 'react';

const { TabPane } = Tabs;
//11
export default () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
```

## 定位方式

支持 `top`、`bottom`、`left`、`right` 四种定位。

```tsx
import { Tabs } from '@auron/components';
import React from 'react';

const { TabPane } = Tabs;

const placements = ['top', 'bottom', 'left', 'right'] as const;

export default () => (
  <div>
    {placements.map((p) => (
      <div key={p} style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 8, textTransform: 'capitalize' }}>{p}</h4>
        <Tabs tabPosition={p} style={{ height: 160 }}>
          <TabPane tab={`${p}-1`} key="1">
            Content
          </TabPane>
          <TabPane tab={`${p}-2`} key="2">
            Content
          </TabPane>
          <TabPane tab={`${p}-3`} key="3">
            Content
          </TabPane>
        </Tabs>
      </div>
    ))}
  </div>
);
```

## 新增和关闭页签 模式

```tsx
import { Tabs } from '@auron/components';
import React, { useRef, useState } from 'react';

const initialItems = [
  { label: 'Tab 1', children: 'Content of Tab 1', key: '1' },
  { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};

export default App;
```

## 尺寸

提供 `small`、`default`、`large` 三种尺寸。

```tsx
import { Tabs } from '@auron/components';
import React from 'react';

const { TabPane } = Tabs;

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <Tabs size="small" defaultActiveKey="1">
      <TabPane tab="Small-A" key="1">
        Small Content
      </TabPane>
      <TabPane tab="Small-B" key="2">
        Small Content
      </TabPane>
    </Tabs>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Default-A" key="1">
        Default Content
      </TabPane>
      <TabPane tab="Default-B" key="2">
        Default Content
      </TabPane>
    </Tabs>
    <Tabs size="large" defaultActiveKey="1">
      <TabPane tab="Large-A" key="1">
        Large Content
      </TabPane>
      <TabPane tab="Large-B" key="2">
        Large Content
      </TabPane>
    </Tabs>
  </div>
);
```

## 受控模式

```tsx
import { Tabs } from '@auron/components';
import React, { useState } from 'react';

const { TabPane } = Tabs;

export default () => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div>
      <p>当前激活: {activeKey}</p>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="Tab 1" key="1">
          Content 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content 3
        </TabPane>
      </Tabs>
    </div>
  );
};
```

## 无边框模式

通过 `border={false}` 移除导航栏和标签项的边框，恢复经典的 ink-bar 指示器样式。

```tsx
import { Tabs } from '@auron/components';
import React from 'react';

const { TabPane } = Tabs;

export default () => (
  <Tabs defaultActiveKey="1" border={false}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
```

## API

| 属性             | 说明                               | 类型                                     | 默认值      |
| ---------------- | ---------------------------------- | ---------------------------------------- | ----------- |
| border           | 是否显示导航栏和标签项边框         | `boolean`                                | `true`      |
| type             | 标签页样式                         | `'line' \| 'card' \| 'editable-card'`    | `'line'`    |
| tabPosition      | 标签页位置                         | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`     |
| size             | 尺寸                               | `'large' \| 'default' \| 'small'`        | `'default'` |
| activeKey        | 当前激活 tab 的 key                | `string`                                 | -           |
| defaultActiveKey | 默认激活 tab 的 key                | `string`                                 | `'1'`       |
| items            | 配置为 items 的方式，替代 children | `TabsProps['items']`                     | -           |
| onChange         | 切换 tab 的回调                    | `(activeKey: string) => void`            | -           |

> 其余属性继承自 antd [Tabs](https://4x.ant.design/components/tabs-cn/#API)。
