import React from 'react';

import { icons } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface IconProps {
  /** 图标名称，与 lucide-react 组件名一致 */
  name: string;
  /** 图标尺寸 */
  size?: number;
  /** 图标颜色 */
  color?: string;
  /** 外部传入自定义 className */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 点击回调 */
  onClick?: () => void;
}

/** 从 lucide-react 按名称获取图标组件 */
function getLucideIcon(name: string): LucideIcon | null {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  return (icons as Record<string, LucideIcon>)[iconName] || null;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color,
  className = '',
  style,
  onClick,
}) => {
  const LucideIcon = getLucideIcon(name);
  if (!LucideIcon) {
    console.warn(`[Auron Icon] 未找到 lucide 图标: ${name}`);
    return null;
  }

  return (
    <span
      className={`auron-icon ${className}`.trim()}
      style={style}
      onClick={onClick}
    >
      <LucideIcon size={size} color={color} />
    </span>
  );
};

export default Icon;
