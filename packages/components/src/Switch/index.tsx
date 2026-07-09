import React from 'react';

import { Switch as AntSwitch } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';
import GlassContainer from '../_internal/GlassContainer';

import type { SwitchProps as AntSwitchProps } from 'antd/es/switch';

import './index.less';

export interface SwitchProps extends AntSwitchProps {
  /** 是否用液态玻璃包裹开关底板 */
  glass?: boolean;
}

/**
 * Auron 开关
 * 基于 antd v4，增加 `glass` 模式与 Design Token 配色
 */
const sizeMap: Record<string, string> = {
  default: '',
  small: '', // antd 自动生成 auron-ant-switch-small，无需额外 class
  large: 'auron-switch--lg',
};

const Switch: React.FC<SwitchProps> = ({
  glass = false,
  size = 'default',
  className = '',
  ...rest
}) => {
  const sizeClass = sizeMap[size as string] || '';
  const cls = `auron-switch ${sizeClass} ${
    glass ? 'auron-switch--glass' : ''
  } ${className}`.trim();

  const sw = <AntSwitch {...rest} size={size} className={cls} />;

  return (
    <AuronConfigWrapper>
      {glass ? (
        <GlassContainer
          style={{ display: 'inline-flex', padding: 0, alignItems: 'center' }}
          radius={9999}
        >
          {sw}
        </GlassContainer>
      ) : (
        sw
      )}
    </AuronConfigWrapper>
  );
};

export default Switch;
