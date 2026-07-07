import React from 'react';
import './index.less';

export type ColorShades = Record<string, string>;

export interface PaletteItem {
  /** 色板名称 */
  name: string;
  /** 色板色系 */
  colors: ColorShades;
}

export interface TextColorItem {
  name: string;
  desc?: string;
  light: string;
  dark: string;
}

export interface ColorProps {
  /** 品牌色板 */
  brandPalette?: PaletteItem;
  /** 系统色板（黄/青/紫） */
  systemPalettes?: PaletteItem[];
  /** 功能色板（成功/失败/提示） */
  functionalPalettes?: PaletteItem[];
  /** 文本色板 */
  textColors?: TextColorItem[];
}

// ─── 品牌色 ───
export const defaultBrand: PaletteItem = {
  name: '品牌色-宇臣蓝',
  colors: {
    'brand-01': '#C0E1FF',
    'brand-02': '#ABD7FF',
    'brand-03': '#83C3FF',
    'brand-04': '#5AB0FF',
    'brand-05': '#319CFF',
    'brand-06': '#287CE0',
    'brand-07': '#1D72C1',
    'brand-08': '#145EA2',
    'brand-09': '#0F5393',
    'brand-10': '#0A4983',
  },
};

// ─── 系统色（黄/青/紫）───
export const defaultSystem: PaletteItem[] = [
  {
    name: '柠檬黄',
    colors: {
      'yellow-01': '#FFF2A0',
      'yellow-02': '#FFEF8B',
      'yellow-03': '#FFEA63',
      'yellow-04': '#FFE43A',
      'yellow-05': '#FFDF11',
      'yellow-06': '#DABE0E',
      'yellow-07': '#B49D0A',
      'yellow-08': '#8F7D07',
      'yellow-09': '#7C6C05',
      'yellow-10': '#695C03',
    },
  },
  {
    name: '春日青',
    colors: {
      'cyan-01': '#7AEEEC',
      'cyan-02': '#6AEAE8',
      'cyan-03': '#4AE2DF',
      'cyan-04': '#29D9D6',
      'cyan-05': '#09D1CD',
      'cyan-06': '#07AAA7',
      'cyan-07': '#068380',
      'cyan-08': '#045B5A',
      'cyan-09': '#034847',
      'cyan-10': '#033433',
    },
  },
  {
    name: '黑夜紫',
    colors: {
      'purple-01': '#C1A3EB',
      'purple-02': '#B692E7',
      'purple-03': '#9F71E0',
      'purple-04': '#894FD8',
      'purple-05': '#722ED1',
      'purple-06': '#6027B0',
      'purple-07': '#4E1F8E',
      'purple-08': '#3B186D',
      'purple-09': '#32145C',
      'purple-10': '#29104B',
    },
  },
];

// ─── 功能色 ───
export const defaultFunctional: PaletteItem[] = [
  {
    name: '成功',
    colors: {
      'success-01': '#9FE399',
      'success-02': '#91DE89',
      'success-03': '#73D46B',
      'success-04': '#56CA4C',
      'success-05': '#39C02D',
      'success-06': '#2F9F25',
      'success-07': '#257E1D',
      'success-08': '#1C5D16',
      'success-09': '#174D12',
      'success-10': '#0D2C0A',
    },
  },
  {
    name: '失败',
    colors: {
      'error-01': '#FCC5C5',
      'error-02': '#FBB2B2',
      'error-03': '#F98C8C',
      'error-04': '#F76565',
      'error-05': '#F53F3F',
      'error-06': '#D83333',
      'error-07': '#BB2828',
      'error-08': '#9D1C1C',
      'error-09': '#8F1616',
      'error-10': '#801111',
    },
  },
  {
    name: '提示',
    colors: {
      'warning-01': '#FFC68F',
      'warning-02': '#FFBB7A',
      'warning-03': '#FFA752',
      'warning-04': '#FF9229',
      'warning-05': '#FF7D00',
      'warning-06': '#D66900',
      'warning-07': '#AD5500',
      'warning-08': '#854100',
      'warning-09': '#703700',
      'warning-10': '#5C2D00',
    },
  },
];

// ─── 文本色 ───
export const defaultTextColors: TextColorItem[] = [
  {
    name: 'text-color',
    desc: '主文本色',
    light: 'rgba(0, 0, 0, 0.88)',
    dark: 'rgba(255, 255, 255, 0.85)',
  },
  {
    name: 'text-color-secondary',
    desc: '次要文本色',
    light: 'rgba(0, 0, 0, 0.65)',
    dark: 'rgba(255, 255, 255, 0.65)',
  },
  {
    name: 'text-color-tertiary',
    desc: '辅助文本色',
    light: 'rgba(0, 0, 0, 0.45)',
    dark: 'rgba(255, 255, 255, 0.45)',
  },
  {
    name: 'text-color-quaternary',
    desc: '禁用/占位文本色',
    light: 'rgba(0, 0, 0, 0.25)',
    dark: 'rgba(255, 255, 255, 0.25)',
  },
];

// ─── 辅助组件：渐变色块条 ───
const ShadeStrip: React.FC<{ colors: ColorShades }> = ({ colors }) => {
  return (
    <div className="auron-color-shades">
      {Object.keys(colors).map((name: string) => {
        const hex = colors[name];
        const label = getLabel(name);
        return (
          <div
            key={name}
            className="auron-color-swatch"
            style={{ backgroundColor: hex }}
          >
            <span className="auron-color-text auron-color-key">
              {name}
              {label && <span className="auron-color-label"> {label}</span>}
            </span>
            <span className="auron-color-text auron-color-hex">
              {hex.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// ─── 辅助组件：文本色展示卡片 ───
const TextColorCard: React.FC<{ item: TextColorItem }> = ({ item }) => {
  return (
    <div className="auron-color-text-card">
      <div className="auron-color-text-card-row">
        <div
          className="auron-color-text-card-block auron-color-text-card-light"
          style={{ color: item.light }}
        >
          <span className="auron-color-text-card-sample">Aa</span>
          <span className="auron-color-text-card-value">{item.light}</span>
        </div>
        <div
          className="auron-color-text-card-block auron-color-text-card-dark"
          style={{ color: item.dark }}
        >
          <span className="auron-color-text-card-sample">Aa</span>
          <span className="auron-color-text-card-value">{item.dark}</span>
        </div>
      </div>
      <div className="auron-color-text-card-info">
        <span className="auron-color-text-card-name">{item.name}</span>
        {item.desc && (
          <span className="auron-color-text-card-desc">{item.desc}</span>
        )}
      </div>
    </div>
  );
};

/**
 * 色板展示组件
 * 结构：品牌色 | 功能色 | 系统色 | 文本色
 */
const Color: React.FC<ColorProps> = ({
  brandPalette = defaultBrand,
  systemPalettes = defaultSystem,
  functionalPalettes = defaultFunctional,
  textColors = defaultTextColors,
}) => {
  return (
    <div className="auron-color">
      {/* 1. 品牌色 */}
      <section className="auron-color-section">
        <h2 className="auron-color-section-title">品牌色</h2>
        <div className="auron-color-palette auron-color-palette--full">
          <h3 className="auron-color-name">{brandPalette.name}</h3>
          <ShadeStrip colors={brandPalette.colors} />
        </div>
      </section>

      {/* 2. 功能色 */}
      <section className="auron-color-section">
        <h2 className="auron-color-section-title">功能色</h2>
        <div className="auron-color-group">
          {functionalPalettes.map((palette) => (
            <div key={palette.name} className="auron-color-palette">
              <h3 className="auron-color-name">{palette.name}</h3>
              <ShadeStrip colors={palette.colors} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. 系统色（黄/青/紫 并排） */}
      <section className="auron-color-section">
        <h2 className="auron-color-section-title">系统色</h2>
        <div className="auron-color-group">
          {systemPalettes.map((palette) => (
            <div key={palette.name} className="auron-color-palette">
              <h3 className="auron-color-name">{palette.name}</h3>
              <ShadeStrip colors={palette.colors} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. 文本色（Light / Dark） */}
      <section className="auron-color-section">
        <h2 className="auron-color-section-title">文本色</h2>
        <div className="auron-color-text-grid">
          {textColors.map((item) => (
            <TextColorCard key={item.name} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

function getLabel(name: string): string {
  if (name.includes('04')) return 'hover';
  if (name.includes('05')) return 'normal';
  if (name.includes('06')) return 'click';
  return '';
}

export default Color;
