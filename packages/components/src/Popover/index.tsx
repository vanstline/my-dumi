import React from 'react';

import { Popover as AntPopover } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type { PopoverProps as AntPopoverProps } from 'antd/es/popover';

import './index.less';

export type PopoverProps = AntPopoverProps & {
  /** 是否启用液态玻璃效果 */
  glass?: boolean;
};

/**
 * Auron 气泡卡片
 * 基于 antd v4 Popover，保留全部 props，视觉层由 Design Token 接管
 * glass 模式下 inner 整体使用 CSS backdrop-filter 实现毛玻璃效果
 */
const Popover: React.FC<PopoverProps> = ({
  glass = false,
  overlayClassName = '',
  overlayInnerStyle = {},
  className = '',
  ...rest
}) => {
  const cls = `auron-popover ${className}`.trim();
  const overlayCls = glass
    ? `auron-popover--glass ${overlayClassName}`.trim()
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
      <AntPopover
        {...rest}
        className={cls}
        overlayClassName={overlayCls}
        overlayInnerStyle={innerStyle}
      />
    </AuronConfigWrapper>
  );
};

export default Popover;
