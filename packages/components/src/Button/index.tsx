import React from 'react';

import { Button as AntButton, ConfigProvider } from 'antd';

import GlassContainer from '../_internal/GlassContainer';

import type { ButtonProps as AntButtonProps } from 'antd/es/button';

import './index.less';

export interface ButtonProps extends AntButtonProps {
  /** 是否启用液态玻璃背景 */
  glass?: boolean;
}

const typeMap: Record<string, string> = {
  primary: 'auron-btn--primary',
  dashed: 'auron-btn--dashed',
  danger: 'auron-btn--danger',
  link: 'auron-btn--link',
  text: 'auron-btn--text',
};

const sizeMap: Record<string, string> = {
  small: 'auron-btn--sm',
  middle: '',
  large: 'auron-btn--lg',
};

/**
 * Auron 按钮
 * 基于 antd v4 逻辑骨架，视觉层由 Design Token 完全接管
 * 内部自动注入 ConfigProvider 确保前缀隔离（auron-ant）
 */
const Button: React.FC<ButtonProps> = ({
  glass = false,
  type = 'default',
  size = 'middle',
  className = '',
  children,
  ...rest
}) => {
  const typeClass = typeMap[type as string] || '';
  const sizeClass = sizeMap[size as string] || '';
  const glassClass = glass ? 'auron-btn--glass' : '';
  const combinedClass =
    `auron-btn ${typeClass} ${sizeClass} ${glassClass} ${className}`.trim();

  const btn = (
    <AntButton {...rest} type={type} size={size} className={combinedClass}>
      {children}
    </AntButton>
  );

  return (
    <ConfigProvider prefixCls="auron-ant">
      {glass ? (
        <GlassContainer
          style={{ display: 'inline-flex', padding: 0 }}
          radius={12}
        >
          {btn}
        </GlassContainer>
      ) : (
        btn
      )}
    </ConfigProvider>
  );
};

export default Button;
