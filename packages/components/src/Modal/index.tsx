import React from 'react';

import { Modal as AntModal } from 'antd';

import Button from '../Button';

import type {
  ModalProps as AntModalProps,
  ModalFuncProps,
} from 'antd/es/modal';

import './index.less';

export interface ModalProps extends AntModalProps {
  /** 是否启用液态玻璃效果 */
  glass?: boolean;
}

// ━━━ 静态方法包装器 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const wrapFunc =
  (fn: (props: ModalFuncProps) => unknown) => (props: ModalFuncProps) =>
    fn({
      ...props,
      prefixCls: 'auron-ant-modal',
      transitionName: 'auron-modal-zoom',
      maskTransitionName: 'auron-modal-fade',
    });

/**
 * Auron 对话框 —— 基于 antd v4 Modal 完全透传。
 *
 * antd v4 内部 `visible` 默认值为 `undefined`，且存在兼容逻辑
 * `visible = open || visible`。当外部只传 `open` 且从 `true` 切到
 * `false` 时，该表达式结果为 `undefined`，导致弹窗不关闭。
 *
 * 本组件显式提取 `open` / `visible`，统一映射为单一 `visible`
 * 传给 antd，避免 `undefined` 穿透。
 */
const Modal: React.FC<ModalProps> & {
  info: (props: ModalFuncProps) => unknown;
  success: (props: ModalFuncProps) => unknown;
  error: (props: ModalFuncProps) => unknown;
  warning: (props: ModalFuncProps) => unknown;
  confirm: (props: ModalFuncProps) => unknown;
  destroyAll: typeof AntModal.destroyAll;
  useModal: typeof AntModal.useModal;
  config: typeof AntModal.config;
} = Object.assign(
  ({
    glass = false,
    className = '',
    open,
    visible,
    footer,
    okText = '确定',
    cancelText = '取消',
    okType = 'primary',
    okButtonProps,
    cancelButtonProps,
    confirmLoading,
    onOk,
    onCancel,
    ...rest
  }: ModalProps) => {
    const cls = `auron-modal ${
      glass ? 'auron-modal--glass' : ''
    } ${className}`.trim();
    const finalVisible = visible !== undefined ? visible : open;

    // 显式构造默认 footer，用 Auron Button 替换 antd 内置按钮
    const defaultFooter =
      footer === undefined ? (
        <>
          <Button
            glass={glass}
            key="cancel"
            onClick={onCancel}
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
            {...okButtonProps}
          >
            {okText}
          </Button>
        </>
      ) : undefined;

    return (
      <AntModal
        {...rest}
        visible={finalVisible}
        className={cls}
        prefixCls="auron-ant-modal"
        transitionName="auron-modal-zoom"
        maskTransitionName="auron-modal-fade"
        footer={defaultFooter || footer}
        onOk={onOk}
        onCancel={onCancel}
      />
    );
  },
  {
    info: wrapFunc(AntModal.info),
    success: wrapFunc(AntModal.success),
    error: wrapFunc(AntModal.error),
    warning: wrapFunc(AntModal.warning),
    confirm: wrapFunc(AntModal.confirm),
    destroyAll: AntModal.destroyAll,
    useModal: AntModal.useModal,
    config: AntModal.config,
  },
);

export default Modal;
