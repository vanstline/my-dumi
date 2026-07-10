import React from 'react';

import { Tooltip as AntTooltip } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type { TooltipProps as AntTooltipProps } from 'antd/es/tooltip';

import './index.less';

export type TooltipProps = AntTooltipProps & {
  /** 是否启用毛玻璃效果 */
  glass?: boolean;
};

/**
 * Auron 文字提示
 * 基于 antd v4 Tooltip，保留全部 props，视觉层由 Design Token 接管
 * glass 模式下使用 CSS backdrop-filter 实现毛玻璃效果
 */
const Tooltip: React.FC<TooltipProps> = ({
  glass = false,
  overlayClassName = '',
  overlayInnerStyle = {},
  className = '',
  ...rest
}) => {
  const cls = `auron-tooltip ${className}`.trim();
  const overlayCls = glass
    ? `auron-tooltip--glass ${overlayClassName}`.trim()
    : overlayClassName;

  // glass 模式下 inner 背景交由 CSS 控制，这里仅去掉实色背景和阴影
  const innerStyle: React.CSSProperties = glass
    ? {
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
      }
    : overlayInnerStyle;

  return (
    <AuronConfigWrapper>
      <AntTooltip
        {...rest}
        className={cls}
        overlayClassName={overlayCls}
        overlayInnerStyle={innerStyle}
      />
    </AuronConfigWrapper>
  );
};

export default Tooltip;
