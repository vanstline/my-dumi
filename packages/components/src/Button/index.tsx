/* eslint-disable react/button-has-type */
import React from 'react';

const sizeMap = {
  small: { padding: '4px 8px', fontSize: 12 },
  middle: { padding: '8px 16px', fontSize: 14 },
  large: { padding: '12px 24px', fontSize: 16 },
};

export interface ButtonProps {
  /** 按钮文字 */
  children: React.ReactNode;
  /** 点击回调 */
  onClick?: () => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'dashed';
  /** 按钮尺寸 */
  size?: 'small' | 'middle' | 'large';
}

/** 基础按钮组件 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = 'default',
  size = 'middle',
}) => {
  const s = sizeMap[size];
  const baseStyle: React.CSSProperties = {
    padding: s.padding,
    fontSize: s.fontSize,
    borderRadius: 4,
    border: '1px solid #d9d9d9',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    background:
      type === 'primary' ? '#1890ff' : type === 'dashed' ? '#fff' : '#fff',
    color: type === 'primary' ? '#fff' : '#333',
    borderStyle: type === 'dashed' ? 'dashed' : 'solid',
  };

  return (
    <button style={baseStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
