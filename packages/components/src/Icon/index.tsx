import React from 'react';

import type { LucideIcon } from 'lucide-react';
import { icons } from 'lucide-react';

import { builtInIcons, specialIcons } from './registry';

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide 图标名称，支持 kebab-case / camelCase / PascalCase */
  name?: string;
  /** 直接传入 SVG ReactNode 或 SVG 组件 */
  component?: React.ReactNode | IconComponent;
  /** 图标尺寸，默认 24px */
  size?: number;
  /** 图标颜色，默认跟随主题 currentcolor */
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

const registeredIcons: Record<string, React.ReactNode | IconComponent> = {
  ...builtInIcons,
  ...specialIcons,
};

/** 注册项目内置 SVG，之后可通过 <Icon name="xxx" /> 使用。 */
export function registerIcon(
  name: string,
  component: React.ReactNode | IconComponent,
) {
  registeredIcons[name] = component;
}

function getLucideIcon(name: string): LucideIcon | null {
  const iconName = name
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
  return (icons as Record<string, LucideIcon>)[iconName] || null;
}

function renderComponent(
  component: React.ReactNode | IconComponent,
  props: Record<string, unknown>,
) {
  if (React.isValidElement(component))
    return React.cloneElement(component, props);
  if (typeof component === 'function') {
    const Component = component;
    // @ts-ignore
    return <Component {...(props as React.SVGProps<SVGSVGElement>)} />;
  }
  return component;
}

const Icon: React.FC<IconProps> = ({
  name,
  component,
  size = 24,
  color = 'currentcolor',
  strokeWidth,
  absoluteStrokeWidth,
  className = '',
  style,
  ...rest
}) => {
  const registered = name ? registeredIcons[name] : undefined;
  const LucideIcon =
    name && !registered && !component ? getLucideIcon(name) : null;
  const iconProps = {
    width: size,
    height: size,
    size,
    color,
    strokeWidth,
    absoluteStrokeWidth,
    'aria-hidden': rest['aria-label'] ? undefined : true,
  };

  let content: React.ReactNode = component ? (
    renderComponent(component, iconProps)
  ) : registered ? (
    renderComponent(registered, iconProps)
  ) : LucideIcon ? (
    <LucideIcon {...iconProps} />
  ) : null;

  // @ts-ignore
  if (!content && process.env.NODE_ENV !== 'production' && name) {
    console.warn(`[Auron Icon] 未找到图标: ${name}`);
  }
  if (!content) return null;

  return (
    <span
      {...rest}
      className={`auron-icon ${className}`.trim()}
      style={{ width: size, height: size, color, ...style }}
    >
      {content}
    </span>
  );
};

export default Icon;
