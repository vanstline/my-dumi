import React from 'react';

import './index.less';

export interface SpaceItem {
  /** 间距名称 */
  name: string;
  /** 间距值（px） */
  value: number;
}

export interface SpaceProps {
  /** 间距大小 */
  size?: number | 'small' | 'middle' | 'large';
  /** 排列方向 */
  direction?: 'horizontal' | 'vertical';
  /** 是否自动换行 */
  wrap?: boolean;
  /** 对齐方式 */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** 子节点（有 children 时表现为布局容器，无 children 时展示间距 Token） */
  children?: React.ReactNode;
  /** 间距列表（仅在无 children 时生效） */
  items?: SpaceItem[];
  /** 是否显示可视化条（仅在无 children 时生效） */
  visual?: boolean;
}

const gapMap: Record<string, number> = {
  small: 8,
  middle: 16,
  large: 24,
};

// ─── 预设间距 ───
export const defaultSpaces: SpaceItem[] = [
  { name: 'spacing-2', value: 2 },
  { name: 'spacing-xs', value: 4 },
  { name: 'spacing-sm', value: 8 },
  { name: 'spacing-12', value: 12 },
  { name: 'spacing-md', value: 16 },
  { name: 'spacing-lg', value: 24 },
  { name: 'spacing-xl', value: 32 },
  { name: 'spacing-40', value: 40 },
  { name: 'spacing-xxl', value: 48 },
  { name: 'spacing-64', value: 64 },
  { name: 'spacing-96', value: 96 },
  { name: 'spacing-160', value: 160 },
];

/**
 * Space 间距组件
 * - 传入 children 时：渲染 flex 布局间隙容器（类似 antd Space）
 * - 不传 children 时：渲染间距 Token 展示（design token 文档用）
 */
const Space: React.FC<SpaceProps> = ({
  size = 8,
  direction = 'horizontal',
  wrap = false,
  align,
  children,
  items = defaultSpaces,
  visual = true,
}) => {
  // 布局容器模式
  if (children !== undefined) {
    const gap = typeof size === 'number' ? size : gapMap[size] || 8;
    const flexWrap = wrap ? 'wrap' : 'nowrap';
    const flexDir = direction === 'vertical' ? 'column' : 'row';
    const alignItems =
      align || (direction === 'horizontal' ? 'center' : undefined);

    return (
      <div
        className="auron-space-container"
        style={{
          display: 'flex',
          gap,
          flexDirection: flexDir as 'row' | 'column',
          flexWrap: flexWrap as 'wrap' | 'nowrap',
          alignItems,
        }}
      >
        {children}
      </div>
    );
  }

  // Token 展示模式
  return (
    <div className="auron-space">
      <p className="auron-space-desc">
        间距规则：所有间距采用 4px 网格增量（取值为 4px 整数倍）。
      </p>
      <div className="auron-space-list">
        {items.map((item) => (
          <div key={item.name} className="auron-space-row">
            <span className="auron-space-name">{item.name}</span>
            {visual && (
              <div
                className="auron-space-bar"
                style={{ width: item.value }}
                title={`${item.value}px`}
              />
            )}
            <span className="auron-space-value">{item.value}px</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Space;
