import React from 'react';
import './index.less';

export interface RadiusItem {
  /** 圆角名称 */
  name: string;
  /** 圆角值（px） */
  value: number;
}

export interface BorderRadiusProps {
  /** 圆角层级列表 */
  items?: RadiusItem[];
}

// ─── 预设圆角 ───
export const defaultRadii: RadiusItem[] = [
  { name: 'radius-xs', value: 12 },
  { name: 'radius-s', value: 16 },
  { name: 'radius-m', value: 20 },
  { name: 'radius-l', value: 24 },
  { name: 'radius-xl', value: 28 },
  { name: 'radius-max', value: 9999 },
];

/**
 * 圆角 Token 展示组件
 */
const BorderRadius: React.FC<BorderRadiusProps> = ({
  items = defaultRadii,
}) => {
  return (
    <div className="auron-border-radius">
      <div className="auron-radius-table">
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>尺寸</th>
              <th>预览</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                <td className="auron-radius-name">{item.name}</td>
                <td className="auron-radius-value">{item.value}px</td>
                <td>
                  <div
                    className="auron-radius-preview"
                    style={{ borderRadius: `${item.value}px` }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorderRadius;
