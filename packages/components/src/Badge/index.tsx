import React from 'react';

import { Badge as AntBadge } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type { BadgeProps as AntBadgeProps } from 'antd/es/badge';
import type { RibbonProps as AntRibbonProps } from 'antd/es/badge/Ribbon';

import './index.less';

export type BadgeProps = AntBadgeProps;
export type RibbonProps = AntRibbonProps;

interface BadgeComponent extends React.FC<BadgeProps> {
  Ribbon: React.FC<RibbonProps>;
}

/**
 * Auron 徽标
 * 基于 antd v4 Badge，保留全部 props，视觉层由 Design Token 接管
 * 状态色映射：success → @color-success / warning → @color-warning / error → @color-error / processing → @color-primary / default → @border-color
 */
const Badge: BadgeComponent = ({ className = '', ...rest }) => {
  const cls = `auron-badge ${className}`.trim();

  return (
    <AuronConfigWrapper>
      <AntBadge {...rest} className={cls} />
    </AuronConfigWrapper>
  );
};

/**
 * Ribbon 缎带 —— 必须与 Badge 一同导出，以自动注入 auron-ant 前缀
 */
const Ribbon: React.FC<RibbonProps> = (props) => (
  <AuronConfigWrapper>
    <AntBadge.Ribbon {...props} />
  </AuronConfigWrapper>
);

Badge.Ribbon = Ribbon;

export default Badge;
