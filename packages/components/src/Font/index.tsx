import React from 'react';
import './index.less';

export interface FontSizeItem {
  /** Token 名称 */
  name: string;
  /** 字号值 */
  size: string;
  /** 行高 */
  lineHeight?: string;
  /** 字重 */
  weight?: number;
}

export interface FontProps {
  /** 预设字号列表 */
  sizes?: FontSizeItem[];
  /** 字体族列表 */
  families?: { name: string; font: string }[];
}

export const defaultSizes: FontSizeItem[] = [
  { name: 'font-size-xs', size: '12px', lineHeight: '1.5', weight: 400 },
  { name: 'font-size-sm', size: '14px', lineHeight: '1.5715', weight: 400 },
  { name: 'font-size-md', size: '16px', lineHeight: '1.5715', weight: 400 },
  { name: 'font-size-lg', size: '20px', lineHeight: '1.4', weight: 600 },
  { name: 'font-size-xl', size: '24px', lineHeight: '1.333', weight: 600 },
];

export const defaultFamilies = [
  {
    name: 'font-family',
    font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
];

const SizeRow: React.FC<{ item: FontSizeItem }> = ({ item }) => (
  <div className="auron-font-row">
    <span className="auron-font-name">{item.name}</span>
    <span className="auron-font-meta">
      size: {item.size} / line-height: {item.lineHeight || 'auto'}
    </span>
    <span
      className="auron-font-sample"
      style={{
        fontSize: item.size,
        lineHeight: item.lineHeight,
        fontWeight: item.weight,
      }}
    >
      The quick brown fox jumps over the lazy dog
    </span>
  </div>
);

const Font: React.FC<FontProps> = ({
  sizes = defaultSizes,
  families = defaultFamilies,
}) => {
  return (
    <div className="auron-font">
      <section className="auron-font-section">
        <h2 className="auron-font-section-title">字号层级</h2>
        {sizes.map((s) => (
          <SizeRow key={s.name} item={s} />
        ))}
      </section>
      <section className="auron-font-section">
        <h2 className="auron-font-section-title">字体族</h2>
        {families.map((f) => (
          <div className="auron-font-family" key={f.name}>
            <span className="auron-font-family-name">{f.name}</span>
            <span className="auron-font-family-value">{f.font}</span>
            <span
              className="auron-font-family-sample"
              style={{ fontFamily: f.font }}
            >
              The quick brown fox jumps over the lazy dog.
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Font;
