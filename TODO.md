# Auron 组件库开发计划

> 所有组件默认支持 `LiquidGlass` 玻璃视觉，组件库底层基于 `@my-dumi/liquid-glass`。

---

## 阶段 0：基础设施

- [ ] **1. 建立 Design Token**

  - 创建 `packages/components/src/styles/variables.less`
  - 定义颜色、间距、圆角、字体、阴影等基础变量
  - 支持 light/dark 双主题

- [ ] **2. components 关联 liquid-glass**

  - `packages/components/package.json` 添加 `dependencies: { "@my-dumi/liquid-glass": "workspace:*" }`

- [ ] **3. 创建 GlassContainer 封装层**

  - 创建 `packages/components/src/_internal/GlassContainer/index.tsx`
  - 统一封装 `LiquidGlass + padding/margin/borderRadius`
  - 供所有组件复用

- [ ] **4. 改造自动导出脚本**

  - `packages/components/src/index.ts` 改为自动扫描 `src/*` 并 re-export
  - 避免手写 30+ 条 export

- [ ] **5. 示范改造：Button / Card**
  - `Button` 增加 `glass?: boolean` prop
  - `Card` 外层强制 wrap `LiquidGlass`
  - 验证 Token + GlassContainer 链路跑通

---

## 阶段 1：基础原子组件

> 纯 Token 展示或轻量包装，自身一般不使用 Glass（但提供 `--glass-*` CSS 变量给下游）

- [ ] **Color** — 颜色面板与 Token 展示
- [ ] **Font / Typography** — 字体、字号、行高 Token
- [ ] **Space** — 间距工具（margin / padding）
- [ ] **BorderRadius** — 圆角 Token 展示
- [ ] **Background** — 背景色 Token
- [ ] **Grid / Row Col** — 栅格布局骨架
- [ ] **Icon** — 图标封装（建议基于 `lucide-react`），支持 `glass?: boolean`
- [ ] **Divider** — 分割线（无 Glass）

---

## 阶段 2：表单与数据录入（核心批次，全部支持 `glass?: boolean`）

> 每个组件通过 `glass` prop 决定是否启用 `LiquidGlass` 背景

- [ ] **Input / TextArea** — 基础输入框
- [ ] **Switch** — 开关
- [ ] **Radio / Checkbox** — 单选与多选
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
- [ ] **Popover** — 气泡（浮层强制 Glass）
- [ ] **Tooltip** — 文字提示（Popover 简化版，共用定位）
- [ ] **Message / Toast** — 全局提示（消息卡片强制 Glass）
- [ ] **Badge** — 徽标（可选 Glass 背景）
- [ ] **Segmented** — 分段控件（按钮组可选 Glass）
- [ ] **Pagination** — 分页器（简洁/完整模式）
- [ ] **Loading / Spin** — 加载指示器（可选 Glass 遮罩）
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

## 备注

- `LiquidGlass` 来自 `@my-dumi/liquid-glass`，作为所有组件的可选/强制视觉容器
- 优先用 `glass?: boolean` 让调用方控制是否启用玻璃效果（除强制 Glass 的浮层类组件）
- 复杂组件（Form、Tree、Select）建议引入成熟底层库（如 `rc-field-form`、`rc-tree`、`rc-select`）做逻辑层，只做视觉层封装
