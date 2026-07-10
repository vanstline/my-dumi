---
title: TODO
description: Auron 组件库开发计划与进度总览
nav:
  title: TODO
  order: 99
  path: /todo
---

# 开发计划

> 所有组件默认支持 `LiquidGlass` 玻璃视觉，组件库底层基于 `@my-dumi/liquid-glass`。

---

## 进度总览

| 日期       | 提交      | 内容                                                     |
| ---------- | --------- | -------------------------------------------------------- |
| 2026-07-07 | `f6d76ac` | 🔧 引入 cspell + 修复 lint 脚本 glob 路径                |
| 2026-07-07 | `da0c001` | ✨ 新增 Color / Space / BorderRadius 设计 Token 展示组件 |
| 2026-07-07 | `5139045` | 📃 新增 design Token 文档 + 中文菜单                     |
| 2026-07-10 | `32e99d4` | ✨ 新增 Tooltip + Popover（glass CSS 效果 + 暗色适配）   |

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

## 阶段 1：基础原子组件

> 纯 Token 展示或轻量包装，自身一般不使用 Glass（但提供 `--glass-*` CSS 变量给下游）

- [x] **Color** ✅ — 色板展示组件（品牌色 / 功能色 / 系统色 / 文本色 Light+Dark 四版块）
- [x] **Space** ✅ — 间距 Token 展示（带可视化条）
- [x] **BorderRadius** ✅ — 圆角 Token 展示（表格 + 预览方块）
- [x] **Font / Typography** ✅ — 字体、字号、行高 Token（代码已完成，缺 `index.md` 文档）
- [x] **Background** ✅ — 背景色 Token（代码已完成，缺 `index.md` 文档）
- [x] **Grid / Row Col** ✅ — 栅格布局骨架
- [x] **Divider** ✅ — 分割线（无 Glass）
- [x] **Icon** ✅ — 图标封装（缺 `glass?: boolean` prop，代码未接入 GlassContainer）

---

## 阶段 2：表单与数据录入（核心批次，全部支持 `glass?: boolean`）

> 每个组件通过 `glass` prop 决定是否启用 `LiquidGlass` 背景

- [ ] **Input / TextArea** — 基础输入框（Radio/Checkbox 已打样，复用 antd CSS + Token 替换）
- [x] **Switch** ✅ — 开关（支持 `glass` + 暗色主题）
- [x] **Radio / Checkbox** ✅ — 单选与多选（glass 模式仅作用于 inner，Group 由外层自行包裹 GlassContainer）
- [ ] **Select / Dropdown** — 下拉菜单（下拉面板强制 Glass）
- [ ] **Search** — 搜索框（Input + Button + 下拉）
- [ ] **TimePicker** — 时间选择器（建议基于 `dayjs`）
- [ ] **Upload** — 文件上传（进度条 + 列表）
- [ ] **Form** — 表单（最复杂，依赖上面所有表单组件；整体外层可选 Glass）

---

## 阶段 3：导航、浮层与反馈（强制 Glass）

> 这些组件默认或强制使用 `LiquidGlass` 作为视觉容器

- [ ] **Tabs** — 选项卡（Tab 内容区或整体可选 Glass）
- [ ] **Menu / NavMenu** — 导航菜单（展开面板强制 Glass）
- [ ] **Modal** — 弹窗（内容区强制 wrap Glass）
- [ ] **Drawer** — 抽屉（侧边变体，内容区强制 Glass）
- [x] **Popover** ✅ — 气泡卡片（`glass` 纯 CSS backdrop-filter；12 向 placement；暗色适配）
- [x] **Tooltip** ✅ — 文字提示（`glass` 纯 CSS backdrop-filter；预设色；暗色适配）
- [ ] **Message / Toast** — 全局提示（消息卡片强制 Glass）
- [x] **Badge** ✅ — 徽标（无 glass，尺寸太小语义优先；含 Ribbon 缎带；Token 替换 + 暗色适配）
- [ ] **Segmented** — 分段控件（按钮组可选 Glass）
- [ ] **Pagination** — 分页器（简洁/完整模式）
- [x] **Loading / Spin** ✅ — 加载指示器（`glass?: boolean`，嵌套遮罩 backdrop-filter；支持自定义 SVG indicator）
- [ ] **Logo** — Logo 组件（容器可选 Glass）

---

## 阶段 4：数据展示与业务组件

> 根据业务需求优先级逐个推进

- [ ] **List** — 列表（item 可选 Glass）
- [ ] **Tag** — 标签（颜色变体 + 可关闭，可选 Glass）
- [ ] **Tree** — 树形控件（递归 + 展开/收起 + 拖拽）
- [ ] **Steps** — 步骤条（步骤卡片可选 Glass）
- [ ] **Descriptions** — 描述列表（整体可选 Glass）
- [ ] **Card** — 卡片（✅ 已有，需按阶段 0 改造 Glass 外层）
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

## 阶段 5 后处理（低优先级）

- **Radio / Checkbox Group 玻璃背景示例**：当前仅单个子项支持 `glass`；整组玻璃背景 visual 需要研究（组件本身不改 DOM 结构的前提下，给 Group 外层加 `GlassContainer` 容器是否可行、暗色兼容性如何），阶段 5 后补充

## 备注

- `LiquidGlass` 来自 `@my-dumi/liquid-glass`，作为所有组件的可选/强制视觉容器
- 优先用 `glass?: boolean` 让调用方控制是否启用玻璃效果（除强制 Glass 的浮层类组件）
- 复杂组件（Form、Tree、Select）建议引入成熟底层库（如 `rc-field-form`、`rc-tree`、`rc-select`）做逻辑层，只做视觉层封装
