import React from 'react';

import { ConfigProvider } from 'antd';

export interface AuronConfigWrapperProps {
  /** 子元素 */
  children: React.ReactNode;
}

/**
 * Auron 内部 ConfigProvider 包装器
 * 仅强制覆盖 prefixCls 为 auron-ant
 * 其余 locale / getPopupContainer 等配置自动继承外层 antd ConfigProvider
 */
export default function AuronConfigWrapper({
  children,
}: AuronConfigWrapperProps) {
  return <ConfigProvider prefixCls="auron-ant">{children}</ConfigProvider>;
}
