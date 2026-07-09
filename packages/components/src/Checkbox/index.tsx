import React from 'react';

import { Checkbox as AntCheckbox } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type {
  CheckboxProps as AntCheckboxProps,
  CheckboxGroupProps,
} from 'antd/es/checkbox';

import './index.less';

export interface CheckboxProps extends AntCheckboxProps {
  /** 是否启用液态玻璃视觉（inner 透明边框 + 发光选中态） */
  glass?: boolean;
}

/**
 * Auron 多选框
 * 基于 antd v4，增加 `glass` 模式与 Design Token 配色
 */
const Checkbox = ({
  glass = false,
  className = '',
  children,
  ...rest
}: CheckboxProps) => {
  const cls = `auron-checkbox ${
    glass ? 'auron-checkbox--glass' : ''
  } ${className}`.trim();

  return (
    <AuronConfigWrapper>
      <AntCheckbox {...rest} className={cls}>
        {children}
      </AntCheckbox>
    </AuronConfigWrapper>
  );
};

const Group = (props: CheckboxGroupProps) => (
  <AuronConfigWrapper>
    <AntCheckbox.Group {...props} />
  </AuronConfigWrapper>
);

Checkbox.Group = Group;

export default Checkbox;
