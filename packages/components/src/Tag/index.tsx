import React from 'react';

import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps, CheckableTagProps } from 'antd/es/tag';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';
import GlassContainer from '../_internal/GlassContainer';

import './index.less';

export type TagVariant = 'filled' | 'outlined' | 'glass';

export interface TagIconProps {
  iconName?: string;
  iconSrc?: string;
}

export interface TagProps extends AntTagProps, TagIconProps {
  glass?: boolean;
  variant?: TagVariant;
}

export interface AuronCheckableTagProps
  extends CheckableTagProps,
    TagIconProps {
  glass?: boolean;
  variant?: TagVariant;
  color?: string;
}

function renderIcon(
  icon: React.ReactNode,
  iconSrc?: string,
  iconName?: string,
): React.ReactNode {
  if (icon) return icon;
  if (iconSrc)
    return <img className="auron-tag-icon-image" src={iconSrc} alt="" />;
  if (iconName) return <span className="auron-tag-icon-name">{iconName}</span>;
  return undefined;
}

function getClassName(
  className: string | undefined,
  variant: TagVariant,
  glass: boolean,
  color?: string,
): string {
  const colorClass =
    color && /^[a-z-]+$/.test(color) ? `auron-tag-color-${color}` : '';
  return [
    'auron-tag',
    glass ? 'auron-tag--liquid' : `auron-tag--${variant}`,
    colorClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

const Tag: React.FC<TagProps> & {
  CheckableTag: React.FC<AuronCheckableTagProps>;
} = ({
  className,
  glass = false,
  variant = 'filled',
  icon,
  iconSrc,
  iconName,
  color,
  ...rest
}) => {
  const tag = (
    <AntTag
      {...rest}
      icon={renderIcon(icon, iconSrc, iconName)}
      color={color}
      className={getClassName(className, variant, glass, color)}
    />
  );

  return (
    <AuronConfigWrapper>
      {glass ? (
        <span className="auron-tag-glass-spacing">
          <GlassContainer
            padding={0}
            radius={999}
            className="auron-tag-glass"
            style={{
              display: 'inline-flex',
              verticalAlign: 'middle',
            }}
          >
            {tag}
          </GlassContainer>
        </span>
      ) : (
        tag
      )}
    </AuronConfigWrapper>
  );
};

const CheckableTag: React.FC<AuronCheckableTagProps> = ({
  className,
  glass = false,
  variant = 'filled',
  icon,
  iconSrc,
  iconName,
  color,
  children,
  ...rest
}) => {
  const tag = (
    <AntTag.CheckableTag
      {...rest}
      className={getClassName(className, variant, glass, color)}
    >
      {renderIcon(icon, iconSrc, iconName)}
      {children}
    </AntTag.CheckableTag>
  );

  return (
    <AuronConfigWrapper>
      {glass ? (
        <span className="auron-tag-glass-spacing">
          <GlassContainer
            padding={0}
            radius={999}
            className="auron-tag-glass"
            style={{
              display: 'inline-flex',
              verticalAlign: 'middle',
            }}
          >
            {tag}
          </GlassContainer>
        </span>
      ) : (
        tag
      )}
    </AuronConfigWrapper>
  );
};

Tag.CheckableTag = CheckableTag;

export default Tag;
