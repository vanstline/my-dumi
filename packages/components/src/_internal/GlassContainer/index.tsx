import React from 'react';

import { LiquidGlass, LiquidGlassProps } from '@my-dumi/liquid-glass';

export interface GlassContainerProps extends LiquidGlassProps {
  /** 子元素 */
  children?: React.ReactNode;
  /** 内边距 */
  padding?: React.CSSProperties['padding'];
}

/**
 * LiquidGlass 的统一封装层
 * 为所有组件提供一致的 glass 视觉容器
 */
export default function GlassContainer({
  children,
  padding,
  ...rest
}: GlassContainerProps) {
  return (
    <LiquidGlass
      {...rest}
      style={{
        padding,
        ...rest.style,
      }}
    >
      {children}
    </LiquidGlass>
  );
}
