import React from 'react';

import { Drawer as AntDrawer } from 'antd';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';

import type { ButtonProps } from '../Button';
import Button from '../Button';

import './index.less';

export interface DrawerProps extends AntDrawerProps {
  /** 是否启用液态玻璃效果 */
  glass?: boolean;
  /** 确认按钮文字 */
  okText?: string;
  /** 取消按钮文字 */
  cancelText?: string;
  /** 确认按钮类型 */
  okType?: 'primary' | 'default' | 'dashed' | 'danger';
  /** 确认按钮 props */
  okButtonProps?: ButtonProps;
  /** 取消按钮 props */
  cancelButtonProps?: ButtonProps;
  /** 确认按钮 loading */
  confirmLoading?: boolean;
  /** 点击确认回调 */
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Auron 抽屉 —— 基于 antd v4 Drawer 完全透传。
 *
 * antd v4 Drawer 内部 `open` 优先级高于 `visible`，
 * 显式提取以与 Modal 保持一致的 props 处理习惯。
 *
 * 默认将取消/确认按钮渲染到 title 右侧的 extra 区域，
 * 同时保留 footer 供用户自定义额外内容。
 */
const Drawer: React.FC<DrawerProps> = ({
  glass = false,
  className = '',
  open,
  visible,
  extra,
  footer,
  title,
  okText = '确定',
  cancelText = '取消',
  okType = 'primary',
  okButtonProps,
  cancelButtonProps,
  confirmLoading,
  onOk,
  onClose,
  children,
  ...rest
}) => {
  const cls = `auron-drawer ${
    glass ? 'auron-drawer--glass' : ''
  } ${className}`.trim();
  const finalOpen = visible !== undefined ? visible : open;

  // 显式构造默认 extra，用 Auron Button 替换
  const defaultExtra =
    extra === undefined ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button
          glass={glass}
          key="cancel"
          onClick={onClose}
          style={{
            borderRadius: 50,
            height: 24,
            lineHeight: 1,
            padding: '0 12px',
          }}
          {...cancelButtonProps}
        >
          {cancelText}
        </Button>
        <Button
          glass={glass}
          key="ok"
          type={okType as any}
          loading={confirmLoading}
          onClick={onOk}
          style={{
            borderRadius: 50,
            height: 24,
            lineHeight: 1,
            padding: '2px 12px',
          }}
          {...okButtonProps}
        >
          {okText}
        </Button>
      </div>
    ) : undefined;

  return (
    <AntDrawer
      {...rest}
      open={finalOpen}
      className={cls}
      prefixCls="auron-ant-drawer"
      title={title}
      footer={footer}
      extra={defaultExtra || extra}
      onClose={onClose}
    >
      {children}
    </AntDrawer>
  );
};

export default Drawer;
