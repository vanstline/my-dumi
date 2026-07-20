---
title: Icon
group:
  title: 基础原子
  order: 1
---

# Icon

统一的 24×24 图标容器，核心图形应保留出血区并放置在安全区域内。支持 Lucide 名称、直接传入 SVG ReactNode/组件，以及通过 `registerIcon` 注册项目图标。

## 主题颜色

Icon 默认使用主题色：Light 为 `rgba(0, 0, 0, 1)`，Dark 为 `rgba(233, 233, 233, 1)`。可通过 `color` 覆盖。

## 内置图标

```tsx | inline
import React from 'react';
import { Icon } from '@auron/icons';
import { Message } from '@auron/components';

import { builtInIconNames, iconMap } from './registry';
console.log(builtInIconNames);
const copyIconCode = async (name: string) => {
  const text = `<Icon name="${name}" />`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      Message.success(`已复制：${text}`);
      return;
    }
  } catch (_) {
    // Fall through to the legacy browser fallback.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  Message.success(`已复制：${text}`);
};

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    {builtInIconNames.map((name) => (
      <div
        key={name}
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <button
            type="button"
            onClick={() => copyIconCode(name)}
            title={`复制 <Icon name="${name}" />`}
            style={{
              width: '100%',
              height: '100%',
              border: 0,
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <Icon name={name} />
          </button>
          <span style={{ fontSize: 12 }}>{iconMap[name] ?? name}</span>
        </div>
      </div>
    ))}
  </div>
);
```

<!-- ## 基础用法

```tsx | inline
import React from 'react';
import { Icon } from '@auron/icons';
import { Message } from '@auron/components';

const copyIconCode = async (name: string) => {
  const text = `<Icon name="${name}" />`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      Message.success(`已复制：${text}`);
      return;
    }
  } catch (_) {
    // Fall through to the legacy browser fallback.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  Message.success(`已复制：${text}`);
};

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {['heart', 'settings', 'search'].map((name) => (
      <div
        key={name}
        style={{
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={() => copyIconCode(name)}
          title={`复制 <Icon name="${name}" />`}
          style={{
            width: 48,
            height: 48,
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <Icon name={name} />
        </button>
      </div>
    ))}
  </div>
);
``` -->

## 初始化图标

```tsx | inline
import React from 'react';
import { Icon } from '@auron/icons';
import { Message } from '@auron/components';

const copyIconCode = async (name: string) => {
  const text = `<Icon name="${name}" />`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      Message.success(`已复制：${text}`);
      return;
    }
  } catch (_) {
    // Fall through to the legacy browser fallback.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  Message.success(`已复制：${text}`);
};

const names = ['ic-language', 'ic-admin', 'ic-layout'];

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {names.map((name) => (
      <div
        key={name}
        style={{
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={() => copyIconCode(name)}
          title={`复制 <Icon name="${name}" />`}
          style={{
            width: 48,
            height: 48,
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <Icon name={name} />
        </button>
      </div>
    ))}
  </div>
);
```

## 状态图标

```tsx | inline
import React from 'react';
import { Icon } from '@auron/icons';
import { Message } from '@auron/components';

const copyIconCode = async (name: string) => {
  const text = `<Icon name="${name}" />`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      Message.success(`已复制：${text}`);
      return;
    }
  } catch (_) {
    // Fall through to the legacy browser fallback.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  Message.success(`已复制：${text}`);
};

const names = ['success', 'error', 'warning', 'hint', 'question'];

export default () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {names.map((name) => (
      <div
        key={name}
        style={{
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={() => copyIconCode(name)}
          title={`复制 <Icon name="${name}" />`}
          style={{
            width: 48,
            height: 48,
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <Icon name={name} />
        </button>
      </div>
    ))}
  </div>
);
```

## 直接传入 SVG 组件 - 代码展示

```tsx
import React from 'react';
import { Icon } from '@auron/icons';

const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default () => <Icon component={CustomIcon} />;
```

## API

| 参数                  | 说明                    | 类型                         | 默认值         |
| --------------------- | ----------------------- | ---------------------------- | -------------- |
| `name`                | Lucide 或已注册图标名称 | `string`                     | —              |
| `component`           | SVG ReactNode 或组件    | `ReactNode \| ComponentType` | —              |
| `size`                | 图标尺寸                | `number`                     | `24`           |
| `color`               | 图标颜色                | `string`                     | `currentColor` |
| `strokeWidth`         | Lucide 线宽             | `number`                     | —              |
| `absoluteStrokeWidth` | 是否使用绝对线宽        | `boolean`                    | —              |
