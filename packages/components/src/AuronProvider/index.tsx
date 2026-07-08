import React from 'react';

import { ConfigProvider } from 'antd';

export interface AuronProviderProps {
  /** 子元素 */
  children: React.ReactNode;
}

/**
 * Auron 全局上下文
 * - 修改 antd 类名前缀为 auron-ant，避免与外部项目的 antd 样式冲突
 * - 统一向所有子组件注入隔离环境
 */
export default function AuronProvider({ children }: AuronProviderProps) {
  return <ConfigProvider prefixCls="auron-ant">{children}</ConfigProvider>;
}
