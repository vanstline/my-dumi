import React from 'react';

import { Radio as AntRadio } from 'antd';
import type {
  RadioProps as AntRadioProps,
  RadioGroupProps,
} from 'antd/es/radio';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import './index.less';

export interface RadioProps extends AntRadioProps {
  /** 是否启用液态玻璃视觉（inner 透明边框 + 发光选中态） */
  glass?: boolean;
}

/**
 * Auron 单选框
 * 基于 antd v4，增加 `glass` 模式与 Design Token 配色
 */
const Radio = ({
  glass = false,
  className = '',
  children,
  ...rest
}: RadioProps) => {
  const cls = `auron-radio ${
    glass ? 'auron-radio--glass' : ''
  } ${className}`.trim();

  return (
    <AuronConfigWrapper>
      <AntRadio {...rest} className={cls}>
        {children}
      </AntRadio>
    </AuronConfigWrapper>
  );
};

const Group = (props: RadioGroupProps) => (
  <AuronConfigWrapper>
    <AntRadio.Group {...props} />
  </AuronConfigWrapper>
);

Radio.Group = Group;

export default Radio;
