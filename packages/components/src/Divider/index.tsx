import React from 'react';

import { Divider as AntDivider, ConfigProvider } from 'antd';

import type { DividerProps as AntDividerProps } from 'antd/es/divider';

import './index.less';

export interface DividerProps extends AntDividerProps {
  /** 自定义 className */
  className?: string;
}

/**
 * Auron 分割线
 * 基于 antd v4 骨架，视觉层由 Design Token 完全接管
 * 内部自动注入 ConfigProvider 确保前缀隔离（auron-ant）
 */
const Divider: React.FC<DividerProps> = ({ className = '', ...rest }) => {
  const cls = `auron-divider ${className}`.trim();
  return (
    <ConfigProvider prefixCls="auron-ant">
      <AntDivider {...rest} className={cls} />
    </ConfigProvider>
  );
};

export default Divider;
