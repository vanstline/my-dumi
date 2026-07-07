import React from 'react';
import './index.less';

export interface SpaceItem {
  /** 间距名称 */
  name: string;
  /** 间距值（px） */
  value: number;
}

export interface SpaceProps {
  /** 间距列表 */
  items?: SpaceItem[];
  /** 是否显示可视化条 */
  visual?: boolean;
}

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
 * 间距 Token 展示组件
 */
const Space: React.FC<SpaceProps> = ({
  items = defaultSpaces,
  visual = true,
}) => {
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
