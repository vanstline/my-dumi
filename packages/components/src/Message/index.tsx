import { message as AntMessage } from 'antd';

import './index.less';

// 注入 prefixCls，确保样式隔离（auron-ant-message）
AntMessage.config({
  prefixCls: 'auron-ant-message',
});

/**
 * Auron 全局提示
 * 基于 antd v4 message 完全透传，保留全部 API（open/success/error/warning/info/loading/config/destroy/useMessage）。
 * 消息内容卡片强制使用液态玻璃效果（由 CSS 控制）。
 */
export default AntMessage;
