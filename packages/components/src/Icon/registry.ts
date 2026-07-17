/* eslint-disable import/order */
import type React from 'react';

import IcAdmin from './generated/IcAdmin';
import IcAttachment from './generated/IcAttachment';
import IcClear from './generated/IcClear';
import IcCopy from './generated/IcCopy';
import IcDark from './generated/IcDark';
import IcData from './generated/IcData';
import IcDelete from './generated/IcDelete';
import IcEdit from './generated/IcEdit';
import IcExpand from './generated/IcExpand';
import IcExpandAlt from './generated/IcExpandAlt';
import IcExpert from './generated/IcExpert';
import IcFocus from './generated/IcFocus';
import IcLanguage from './generated/IcLanguage';
import IcLayout from './generated/IcLayout';
import IcLight from './generated/IcLight';
import IcLocate from './generated/IcLocate';
import IcMonitor from './generated/IcMonitor';
import IcRefresh from './generated/IcRefresh';
import IcRefreshAlt from './generated/IcRefreshAlt';
import IcSettings from './generated/IcSettings';
import IcTask from './generated/IcTask';
import IcThumbtack from './generated/IcThumbtack';
import IcZoomOut from './generated/IcZoomOut';
import IconAdd from './generated/IconAdd';
import IconAddFile from './generated/IconAddFile';
import IconAlarm from './generated/IconAlarm';
import IconAttachment from './generated/IconAttachment';
import IconBlackArm from './generated/IconBlackArm';
import IconBlackArrowRight from './generated/IconBlackArrowRight';
import IconBlackCentrifuge from './generated/IconBlackCentrifuge';
import IconBlackConsumption from './generated/IconBlackConsumption';
import IconBlackExpert from './generated/IconBlackExpert';
import IconBlackHumidity from './generated/IconBlackHumidity';
import IconBlackLog from './generated/IconBlackLog';
import IconBlackQuestion from './generated/IconBlackQuestion';
import IconBlackTip from './generated/IconBlackTip';
import IconBlackWifi from './generated/IconBlackWifi';
import IconBlackWifiAlt from './generated/IconBlackWifiAlt';
import IconCalibration from './generated/IconCalibration';
import IconChangeLang from './generated/IconChangeLang';
import IconCheck from './generated/IconCheck';
import IconChevronDown from './generated/IconChevronDown';
import IconClose from './generated/IconClose';
import IconCompass from './generated/IconCompass';
import IconConfig from './generated/IconConfig';
import IconCopy from './generated/IconCopy';
import IconCurrent from './generated/IconCurrent';
import IconDashboard from './generated/IconDashboard';
import IconDesktop from './generated/IconDesktop';
import IconDetails from './generated/IconDetails';
import IconDev from './generated/IconDev';
import IconDevice from './generated/IconDevice';
import IconDownload from './generated/IconDownload';
import IconDownloadFile from './generated/IconDownloadFile';
import IconEditFile from './generated/IconEditFile';
import IconExport from './generated/IconExport';
import IconExportFile from './generated/IconExportFile';
import IconFailure from './generated/IconFailure';
import IconFlow from './generated/IconFlow';
import IconGrid from './generated/IconGrid';
import IconHarm from './generated/IconHarm';
import IconHate from './generated/IconHate';
import IconHelp from './generated/IconHelp';
import IconHidden from './generated/IconHidden';
import IconHome from './generated/IconHome';
import IconImage from './generated/IconImage';
import IconImportFile from './generated/IconImportFile';
import IconInfo from './generated/IconInfo';
import IconInteractive from './generated/IconInteractive';
import IconLanguage from './generated/IconLanguage';
import IconLike from './generated/IconLike';
import IconMore from './generated/IconMore';
import IconNotification from './generated/IconNotification';
import IconPause from './generated/IconPause';
import IconPin from './generated/IconPin';
import IconPipette from './generated/IconPipette';
import IconProgress from './generated/IconProgress';
import IconQuestion from './generated/IconQuestion';
import IconRemove from './generated/IconRemove';
import IconSafety from './generated/IconSafety';
import IconSave from './generated/IconSave';
import IconSearch from './generated/IconSearch';
import IconSettings from './generated/IconSettings';
import IconShare from './generated/IconShare';
import IconSingle from './generated/IconSingle';
import IconStop from './generated/IconStop';
import IconSuccess from './generated/IconSuccess';
import IconTag from './generated/IconTag';
import IconTaskManager from './generated/IconTaskManager';
import IconTime from './generated/IconTime';
import IconTimeAlt from './generated/IconTimeAlt';
import IconTip from './generated/IconTip';
import IconUploadFile from './generated/IconUploadFile';
import IconUser from './generated/IconUser';
import IconVisible from './generated/IconVisible';
import IconVoice from './generated/IconVoice';
import IconZoomIn from './generated/IconZoomIn';
import IconZoomOut from './generated/IconZoomOut';

export const builtInIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  'ic-attachment': IcAttachment,
  'ic-clear': IcClear,
  'ic-copy': IcCopy,
  'ic-dark': IcDark,
  'ic-data': IcData,
  'ic-delete': IcDelete,
  'ic-edit': IcEdit,
  'ic-expand-alt': IcExpandAlt,
  'ic-expand': IcExpand,
  'ic-expert': IcExpert,
  'ic-focus': IcFocus,
  'ic-light': IcLight,
  'ic-locate': IcLocate,
  'ic-monitor': IcMonitor,
  'ic-refresh-alt': IcRefreshAlt,
  'ic-refresh': IcRefresh,
  'ic-settings': IcSettings,
  'ic-task': IcTask,
  'ic-thumbtack': IcThumbtack,
  'ic-zoom-out': IcZoomOut,
  'icon-add': IconAdd,
  'icon-add-file': IconAddFile,
  'icon-alarm': IconAlarm,
  'icon-attachment': IconAttachment,
  'icon-black-arm': IconBlackArm,
  'icon-black-arrow-right': IconBlackArrowRight,
  'icon-change-lang': IconChangeLang,
  'icon-black-centrifuge': IconBlackCentrifuge,
  'icon-black-consumption': IconBlackConsumption,
  'icon-black-expert': IconBlackExpert,
  'icon-black-humidity': IconBlackHumidity,
  'icon-black-log': IconBlackLog,
  'icon-black-question': IconBlackQuestion,
  'icon-black-tip': IconBlackTip,
  'icon-black-wifi-alt': IconBlackWifiAlt,
  'icon-black-wifi': IconBlackWifi,
  'icon-calibration': IconCalibration,
  'icon-check': IconCheck,
  'icon-chevron-down': IconChevronDown,
  'icon-close': IconClose,
  'icon-compass': IconCompass,
  'icon-config': IconConfig,
  'icon-copy': IconCopy,
  'icon-hate': IconHate,
  'icon-current': IconCurrent,
  'icon-dashboard': IconDashboard,
  'icon-desktop': IconDesktop,
  'icon-details': IconDetails,
  'icon-dev': IconDev,
  'icon-device': IconDevice,
  'icon-download': IconDownload,
  'icon-download-file': IconDownloadFile,
  'icon-edit-file': IconEditFile,
  'icon-export': IconExport,
  'icon-export-file': IconExportFile,
  'icon-task-manager': IconTaskManager,
  'icon-flow': IconFlow,
  'icon-grid': IconGrid,
  'icon-help': IconHelp,
  'icon-hidden': IconHidden,
  'icon-home': IconHome,
  'icon-image': IconImage,
  'icon-import-file': IconImportFile,
  'icon-interactive': IconInteractive,
  'icon-language': IconLanguage,
  'icon-like': IconLike,
  'icon-more': IconMore,
  'icon-pipette': IconPipette,
  'icon-notification': IconNotification,
  'icon-pause': IconPause,
  'icon-pin': IconPin,
  'icon-progress': IconProgress,
  'icon-remove': IconRemove,
  'icon-save': IconSave,
  'icon-search': IconSearch,
  'icon-settings': IconSettings,
  'icon-share': IconShare,
  'icon-single': IconSingle,
  'icon-stop': IconStop,
  'icon-tag': IconTag,
  'icon-time-alt': IconTimeAlt,
  'icon-time': IconTime,
  'icon-upload-file': IconUploadFile,
  'icon-user': IconUser,
  'icon-visible': IconVisible,
  'icon-voice': IconVoice,
  'icon-zoom-out': IconZoomOut,
  'icon-zoom-in': IconZoomIn,
  'icon-safety': IconSafety,
  'icon-harm': IconHarm,
};

export const builtInIconNames = Object.keys(builtInIcons);

export const specialIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  'ic-admin': IcAdmin,
  'ic-language': IcLanguage,
  'ic-layout': IcLayout,
  question: IconQuestion,
  success: IconSuccess,
  error: IconFailure,
  warning: IconInfo,
  hint: IconTip,
};

export const iconMap: Record<string, string> = {
  'ic-attachment': '附件',
  'ic-clear': '清空',
  'ic-copy': '复制',
  'ic-dark': '深色',
  'ic-data': '数据管理',
  'ic-delete': '删除',
  'ic-edit': '编辑',
  'ic-expand': '展开',
  'ic-expand-alt': '展开（备选）',
  'ic-expert': '专家模式',
  'ic-focus': '回到焦点',
  'ic-light': '亮色',
  'ic-locate': '定位',
  'ic-monitor': '监控',
  'ic-thumbtack': '钉住',
  'ic-refresh': '刷新',
  'ic-refresh-alt': '刷新（备选）',
  'ic-settings': '参数设置',
  'ic-task': '作业管理',
  'ic-zoom-out': '缩小',
  'icon-add': '添加',
  'icon-add-file': '添加文件',
  'icon-alarm': '警报',
  'icon-attachment': '附件',
  'icon-black-arm': '机械臂',
  'icon-change-lang': '选择语言',
  'icon-black-arrow-right': '向右',
  'icon-black-centrifuge': '离心机',
  'icon-black-consumption': '试剂耗材',
  'icon-black-expert': '专家模式',
  'icon-black-humidity': '湿度',
  'icon-black-log': '日志',
  'icon-black-question': '问题',
  'icon-black-tip': '提示',
  'icon-black-wifi': 'Wi-Fi',
  'icon-black-wifi-alt': 'Wi-Fi(无网络)',
  'icon-calibration': '标尺',
  'icon-check': '对勾',
  'icon-close': '关闭',
  'icon-compass': '指南针',
  'icon-config': '配置',
  'icon-copy': '复制',
  'icon-hate': '差评',
  'icon-current': '电流',
  'icon-dashboard': '仪表盘',
  'icon-remove': '移除',
  'icon-desktop': '桌面',
  'icon-details': '详情',
  'icon-dev': '开发',
  'icon-device': '设备',
  'icon-download': '下载',
  'icon-download-file': '下载文件',
  'icon-edit-file': '编辑文件',
  'icon-chevron-down': '下箭头',
  'icon-export': '导出',
  'icon-export-file': '导出文件',
  'icon-flow': '流程配置',
  'icon-task-manager': '任务管理',
  'icon-grid': '九宫格',
  'icon-help': '问号',
  'icon-hidden': '不可视',
  'icon-home': '首页',
  'icon-image': '图片',
  'icon-import-file': '导入文件',
  'icon-interactive': '交互模式',
  'icon-language': '语言',
  'icon-like': '点赞',
  'icon-more': '更多',
  'icon-pipette': '移液枪',
  'icon-notification': '提醒',
  'icon-pause': '暂停',
  'icon-pin': '置顶',
  'icon-progress': '进度',
  'icon-save': '保存',
  'icon-search': '搜索',
  'icon-settings': '设置',
  'icon-share': '分享',
  'icon-single': '单步模式',
  'icon-stop': '终止',
  'icon-tag': '标签',
  'icon-time': '时间',
  'icon-time-alt': '时间（备选）',
  'icon-upload-file': '上传文件',
  'icon-user': '用户',
  'icon-visible': '可视',
  'icon-voice': '语音',
  'icon-zoom-out': '缩小',
  'icon-zoom-in': '放大',
  'icon-harm': '危害',
  'icon-safety': '安全',
  'ic-admin': '超级管理员密码',
  'ic-language': '选择语言',
  'ic-layout': '布局',
  question: '疑问',
  success: '成功',
  error: '失败',
  warning: '警告',
  hint: '提示',
};
