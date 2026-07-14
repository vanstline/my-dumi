import React from 'react';

import { Card as AntCard } from 'antd';
import type { CardProps as AntCardProps } from 'antd/es/card';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';
import GlassContainer from '../_internal/GlassContainer';

import './index.less';

export interface CardProps extends AntCardProps {
  /** 是否强制启用液态玻璃背景 */
  glass?: boolean;
}

/**
 * Auron 卡片
 * 基于 antd v4 逻辑骨架，视觉层由 Design Token 完全接管
 * 内部自动注入 ConfigProvider 确保前缀隔离（auron-ant）
 */
const Card: React.FC<CardProps> = ({
  glass = false,
  className = '',
  children,
  ...rest
}) => {
  const cls = `auron-card ${
    glass ? 'auron-card--glass' : ''
  } ${className}`.trim();
  const card = (
    <AntCard {...rest} className={cls}>
      {children}
    </AntCard>
  );

  return (
    <AuronConfigWrapper>
      {glass ? <GlassContainer padding={0}>{card}</GlassContainer> : card}
    </AuronConfigWrapper>
  );
};

export default Card;
