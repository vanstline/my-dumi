import React from 'react';

import { Input as AntInput } from 'antd';
import type {
  InputProps as AntInputProps,
  PasswordProps as AntPasswordProps,
  TextAreaProps as AntTextAreaProps,
} from 'antd/es/input';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import './index.less';

export type InputVariant = 'default' | 'glass';

export interface InputProps extends AntInputProps {
  variant?: InputVariant;
}

export interface TextAreaProps extends AntTextAreaProps {
  variant?: InputVariant;
}

export interface PasswordProps extends AntPasswordProps {
  variant?: InputVariant;
}

const Input: React.FC<InputProps> & {
  TextArea: React.FC<TextAreaProps>;
  Password: React.FC<PasswordProps>;
} = ({ variant = 'default', className = '', ...rest }) => (
  <AuronConfigWrapper>
    <AntInput
      {...rest}
      className={['auron-input', `auron-input--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  </AuronConfigWrapper>
);

const TextArea: React.FC<TextAreaProps> = ({
  variant = 'default',
  className = '',
  ...rest
}) => (
  <AuronConfigWrapper>
    <AntInput.TextArea
      {...rest}
      className={['auron-input', `auron-input--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  </AuronConfigWrapper>
);

Input.TextArea = TextArea;
Input.Password = (({ variant = 'default', className = '', ...rest }) => (
  <AuronConfigWrapper>
    <AntInput.Password
      {...rest}
      className={['auron-input', `auron-input--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  </AuronConfigWrapper>
)) as React.FC<PasswordProps>;

export default Input;
