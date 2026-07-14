---
title: TODO
description: Auron 组件库开发计划与进度总览
nav:
  title: TODO
  order: 99
  path: /todo
---

# Auron 组件库开发计划

> 所有组件默认支持 `LiquidGlass` 玻璃视觉，组件库底层基于 `@my-dumi/liquid-glass`。

---

## 进度总览

| 日期       | 提交      | 内容                                                     |
| ---------- | --------- | -------------------------------------------------------- |
| 2026-07-07 | `f6d76ac` | 🔧 引入 cspell + 修复 lint 脚本 glob 路径                |
| 2026-07-07 | `da0c001` | ✨ 新增 Color / Space / BorderRadius 设计 Token 展示组件 |
| 2026-07-07 | `5139045` | 📃 新增 design Token 文档 + 中文菜单                     |

---

## 阶段 0：基础设施 ✅（2026-07-07 完成）

- [x] **1. 建立 Design Token**

  - ✅ 已创建 `packages/components/src/styles/variables.less`
  - ✅ 包含品牌色/系统色（黄/青/紫）/功能色（成功/失败/提示）/文本色（Light+Dark）
  - ✅ 间距系统（4px 网格增量）/ 圆角层级 / 阴影 / 玻璃变量

- [x] **2. components 关联 liquid-glass**

  - ✅ `packages/components/package.json` 已添加 `"@my-dumi/liquid-glass": "workspace:*"`

- [x] **3. 创建 GlassContainer 封装层**

  - ✅ 已创建 `packages/components/src/_internal/GlassContainer/index.tsx`
  - ✅ 统一封装 `LiquidGlass + padding`

- [x] **4. 改造自动导出脚本**

  - ✅ `packages/components/scripts/gen-exports.js` — 自动扫描 src/\* 目录生成 `index.ts`
  - ✅ `packages/components/src/index.ts` 已改为自动生成（保留注释说明）

- [x] **5. 工程化改进**
  - ✅ 新增 cspell 拼写检查（含自定义词典 `.cspell/custom-dictionary.txt`）
  - ✅ 修复 `lint:css` / `lint:es` / `lint:spell` glob 路径为 `packages/**/*`
  - ✅ 新增 `style.d.ts` 声明 `.less` / `.css` 模块，修复 TS 报错

---

## 阶段 0 遗留 / 下一步 ✅（2026-07-09 完成）

- [x] **示范改造：Button / Card**
  - `Button` 增加 `glass?: boolean` prop + 暗色主题支持
  - `Card` 外层可选 `LiquidGlass` 封装（`glass={true}` 时启用）
  - Token + GlassContainer 链路已跑通（commit `8a09ac7`）

### P0 技术债清理 ✅（2026-07-09 完成，commit `9c147d5`）

- [x] 消除 father 产物路径冲突隐患
- [x] antd 按需导入（`babel-plugin-import`）
- [x] 修复并行构建 race condition
- [x] `liquid-glass` 统一 father 4，产物路径对齐
- [x] `@babel/plugin-transform-runtime` + `@babel/runtime` 发布安全优化

---

## 已完成 ✅

### 阶段 1：基础原子组件

> 纯 Token 展示或轻量包装，自身一般不使用 Glass（但提供 `--glass-*` CSS 变量给下游）

- [x] **Color** ✅ — 色板展示组件（品牌色 / 功能色 / 系统色 / 文本色 Light+Dark 四版块）
- [x] **Space** ✅ — 间距 Token 展示（带可视化条）
- [x] **BorderRadius** ✅ — 圆角 Token 展示（表格 + 预览方块）
- [x] **Font / Typography** ✅ — 字体、字号、行高 Token
- [x] **Background** ✅ — 背景色 Token
- [x] **Grid / Row Col** ✅ — 栅格布局骨架
- [x] **Divider** ✅ — 分割线（无 Glass）
- [x] **Icon** ✅ — 图标封装（`glass` prop 暂不接入，阶段 5 后处理）

### 阶段 2（已完成部分）：表单与数据录入

> 已有组件继续保留使用，其余暂缓至阶段 3 完成后推进

- [x] **Button** ✅ — 支持 `glass` + 暗色主题
- [x] **Switch** ✅ — 支持 `glass` + 暗色主题
- [x] **Radio / Checkbox** ✅ — 单选与多选（glass 模式仅作用于 inner，Group 由外层自行包裹 GlassContainer）

### 阶段 4（已完成部分）：数据展示

- [x] **Card** ✅ — 支持 `glass` + 暗色主题

---

## 阶段 3：导航、浮层与反馈（下一步执行）

> 这些组件默认或强制使用 `LiquidGlass` 作为视觉容器，按实现复杂度与玻璃效果展示价值分优先级推进

### P0 — 热身组件（无状态 or 极简交互）

- [x] **Badge** ✅ — 徽标（无 glass，尺寸太小语义优先；含 Ribbon 缎带；Token 替换 + 暗色适配）
- [x] **Loading / Spin** ✅ — 完全透传 antd v4 Spin，仅替换前缀与默认 SVG indicator，无额外 prop 拦截

### P1 — 基础容器型（内容区做 Glass 效果直观）

- [x] **Tabs** ✅ — 完全透传 antd v4 Tabs，逐行复刻样式；新增 `border?: boolean`（默认 `true`）控制是否显示导航栏与标签项边框，`border={false}` 时恢复 ink-bar 指示器
- [ ] **Pagination** — 分页器（纯展示 + 点击，Glass 外壳视觉明显）
- [ ] **Segmented** — 分段控件（按钮组可选 `glass`）

### P2 — 浮层核心（强制 Glass，建立 Portal + Mask + Glass 通用模板）

- [x] **Tooltip** ✅ — 文字提示（`glass` CSS glass 效果，12 向 placement，预设色，暗色适配）
- [x] **Popover** ✅ — 气泡卡片（基于 Tooltip，glass 模式，预设色，暗色适配）
- [x] **Modal** ✅ — 弹窗（`glass` + 暗色主题；默认 footer 用 Auron Button 替换并自动注入 `glass`；静态方法注入 `prefixCls`；Modal.confirm 命令式层重写待 Icon 组件后继续）
- [x] **Drawer** ✅ — 侧边抽屉（glass + 暗色主题），复用 Modal 已验证的 mask/portal/动画 逻辑

### P3 — 导航与全局状态

- [ ] **Menu / NavMenu** — 导航菜单（展开面板强制 Glass）
- [x] **Message / Toast** ✅ — 全局提示（消息卡片强制 Glass，已初始化 prefixCls）

### P4 — 收尾

- [ ] **Logo** — Logo 组件（容器可选 Glass，纯展示）

---

## 阶段 4：数据展示与业务组件（后续推进）

> 根据业务需求优先级逐个推进

- [ ] **List** — 列表（item 可选 Glass）
- [ ] **Tag** — 标签（颜色变体 + 可关闭，可选 Glass）
- [ ] **Tree** — 树形控件（递归 + 展开/收起 + 拖拽）
- [ ] **Steps** — 步骤条（步骤卡片可选 Glass）
- [ ] **Descriptions** — 描述列表（整体可选 Glass）
- [ ] **DeviceBubble** — 设备组件模块气泡（**业务核心**，强制 Glass，需求最具体，放最后）

---

## 通用规范 checklist（每个组件必须满足）

- [ ] TypeScript：导出 `Props` 接口
- [ ] 样式：引用 `variables.less` 中的 Token，禁止硬编码颜色/尺寸
- [ ] 文档：`.md` 至少包含基础用法 + API 表格
- [ ] 主题：通过 `data-prefers-color="dark"` 验证暗色模式
- [ ] Glass：按分级策略接入 `LiquidGlass` 或 `GlassContainer`
- [ ] 导出：自动注入 `packages/components/src/index.ts`

---

## 文件目录模板

```
packages/components/src/
├── [ComponentName]/
│   ├── index.tsx          # 组件实现
│   ├── index.less         # 组件样式（引用 Token）
│   ├── index.md           # dumi 文档 + demo
│   └── interface.ts       # 类型定义（复杂时拆分）
├── _internal/
│   └── GlassContainer/    # LiquidGlass 统一封装
├── styles/
│   └── variables.less     # Design Token
└── index.ts               # 自动扫描导出
```

---

## 已知问题 / 待修复

- `.dumi/global.less` 中 `[data-route^='/designs']` 在 dumi 2.x 已失效，需改用运行时方案（监听路由 + body class）
- `gen-exports.js` 未生成 `export type { XProps }`，TypeScript 类型导出可能不完整（如需类型导出需单独补充）

---

## 阶段 5：表单与数据录入（暂缓，阶段 3 完成后推进）

> 最复杂的组件批次，依赖 `rc-field-form`、`rc-select` 等底层库做逻辑层，只做视觉层封装

- [ ] **Input / TextArea** — 基础输入框
- [ ] **Select / Dropdown** — 下拉菜单（下拉面板强制 Glass）
- [ ] **Search** — 搜索框（Input + Button + 下拉）
- [ ] **TimePicker** — 时间选择器（建议基于 `dayjs`）
- [ ] **Upload** — 文件上传（进度条 + 列表）
- [ ] **Form** — 表单（最复杂，依赖上面所有表单组件；整体外层可选 Glass）

### 阶段 5 后处理（低优先级）

- **Radio / Checkbox Group 玻璃背景示例**：当前仅单个子项支持 `glass`；整组玻璃背景 visual 需要研究（组件本身不改 DOM 结构的前提下，给 Group 外层加 `GlassContainer` 容器是否可行、暗色兼容性如何）

## 备注

- `LiquidGlass` 来自 `@my-dumi/liquid-glass`，作为所有组件的可选/强制视觉容器
- 优先用 `glass?: boolean` 让调用方控制是否启用玻璃效果（除强制 Glass 的浮层类组件）
- 复杂组件（Form、Tree、Select）建议引入成熟底层库（如 `rc-field-form`、`rc-tree`、`rc-select`）做逻辑层，只做视觉层封装
