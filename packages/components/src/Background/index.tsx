import React from 'react';
import './index.less';

export interface BackgroundItem {
  name: string;
  desc?: string;
  /** 亮色模式下背景值 */
  light: string;
  /** 暗色模式下背景值 */
  dark: string;
}

export interface BackgroundProps {
  /** 背景色条目列表 */
  items?: BackgroundItem[];
}

export const defaultBackgrounds: BackgroundItem[] = [
  {
    name: 'bg-color',
    desc: '页面全局背景（含径向渐变）',
    light:
      'radial-gradient(117.25% 101.76% at 64.77% 79.12%, #fff 0%, #d1d1d1 100%)',
    dark: 'radial-gradient(117.25% 101.76% at 64.77% 79.12%, #5e5e5e 0%, #000 100%)',
  },
  {
    name: 'bg-color-container',
    desc: '卡片/容器背景',
    light: '#ffffff',
    dark: '#1a1a1a',
  },
  {
    name: 'bg-color-elevated',
    desc: '浮层/弹窗背景',
    light: '#ffffff',
    dark: '#2c2c2c',
  },
];

const CardBlock: React.FC<{ item: BackgroundItem }> = ({ item }) => {
  return (
    <div className="auron-background-card">
      <div className="auron-background-card-row">
        <div
          className="auron-background-card-block auron-background-card-light"
          style={{ background: item.light }}
        >
          <span className="auron-background-card-value">{item.light}</span>
        </div>
        <div
          className="auron-background-card-block auron-background-card-dark"
          style={{ background: item.dark }}
        >
          <span className="auron-background-card-value">{item.dark}</span>
        </div>
      </div>
      <div className="auron-background-card-info">
        <span className="auron-background-card-name">{item.name}</span>
        {item.desc && (
          <span className="auron-background-card-desc">{item.desc}</span>
        )}
      </div>
    </div>
  );
};

const Background: React.FC<BackgroundProps> = ({
  items = defaultBackgrounds,
}) => {
  return (
    <div className="auron-background">
      {items.map((item) => (
        <CardBlock key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Background;
