import React from 'react';

import { ConfigProvider } from 'antd';

import type { ConfigProviderProps } from 'antd/es/config-provider';

export type AuronProviderProps = RemovePrefixCls;

type RemovePrefixCls = Omit<ConfigProviderProps, 'prefixCls'>;

/**
 * Auron 全局上下文
 * - 修改 antd 类名前缀为 auron-ant，避免与外部项目的 antd 样式冲突
 * - 透传其余 ConfigProvider 属性（locale、getPopupContainer 等），由业务统一控制
 * - 用法与 antd ConfigProvider 完全一致，仅 prefixCls 被强制固定为 auron-ant
 */
export default function AuronProvider(props: AuronProviderProps) {
  const { children, ...rest } = props;
  return (
    <ConfigProvider prefixCls="auron-ant" {...rest}>
      {children}
    </ConfigProvider>
  );
}
