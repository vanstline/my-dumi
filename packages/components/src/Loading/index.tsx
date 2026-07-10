import React from 'react';

import { Spin as AntSpin } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type { SpinProps as AntSpinProps } from 'antd/es/spin';

import './index.less';

// 默认 indicator — ReactElement，antd cloneElement 自动追加 auron-ant-spin-dot
const defaultIndicator = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" fill="none">
    <circle
      cx="42"
      cy="42"
      r="40"
      stroke="currentColor"
      strokeOpacity={0.15}
      strokeWidth={4}
    />
    <path
      d="M56.0103 43.3818L70.0028 35.1219L52.9747 25V41.6009L42.0574 48.0798L31.1164 41.6305V25.0648L13.9961 35.0895L28.0939 43.4007L28.0755 59.8721L42.0442 51.6256L55.6783 59.6643L56.0314 59.8721V59.4565L56.0103 43.3818ZM28.115 39.8954L19.8856 35.0895L28.1598 30.2701L28.115 39.8954ZM31.1164 54.6047V45.1844L39.1008 49.8932L31.1164 54.6074V54.6047ZM52.9747 54.5966L44.9876 49.8878L52.9747 45.1736V54.5966ZM55.9313 30.2134L64.1185 35.1165L55.9708 39.8658L55.9313 30.2134Z"
      fill="currentColor"
      fillOpacity={0.9}
    />
    <g>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 42 42"
        to="360 42 42"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <path
        d="M42.3184 2C27.3258 2 14.2473 10.0541 7.31836 22"
        stroke="currentColor"
        strokeOpacity={0.9}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export type LoadingProps = AntSpinProps;

/**
 * Auron 加载指示器
 * 完全透传 antd v4 Spin，仅注入 auron-ant 前缀与默认 SVG indicator。
 */
const Loading: React.FC<LoadingProps> = ({ indicator, ...rest }) => (
  <AuronConfigWrapper>
    <AntSpin {...rest} indicator={indicator ?? defaultIndicator} />
  </AuronConfigWrapper>
);

export default Loading;
