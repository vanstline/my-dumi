import React from 'react';

import { Col as AntCol, Row as AntRow } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type {
  ColProps as AntColProps,
  RowProps as AntRowProps,
} from 'antd/es/grid';

import './index.less';

export interface RowProps extends AntRowProps {
  className?: string;
}

export interface ColProps extends AntColProps {
  className?: string;
}

export type GridProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Auron Row
 * 基于 antd v4 Row 封装，保留全部响应式属性（gutter 数组、align、justify、wrap 等）
 * 内部自动注入 ConfigProvider 确保前缀隔离（auron-ant）
 */
const Row: React.FC<RowProps> = ({ className = '', ...rest }) => {
  const cls = `auron-row ${className}`.trim();
  return (
    <AuronConfigWrapper>
      <AntRow {...rest} className={cls} />
    </AuronConfigWrapper>
  );
};

/**
 * Auron Col
 * 基于 antd v4 Col 封装，保留全部响应式断点（xs | sm | md | lg | xl | xxl）与 flex/order/push/pull
 * 内部自动注入 ConfigProvider 确保前缀隔离（auron-ant）
 */
const Col: React.FC<ColProps> = ({ className = '', ...rest }) => {
  const cls = `auron-col ${className}`.trim();
  return (
    <AuronConfigWrapper>
      <AntCol {...rest} className={cls} />
    </AuronConfigWrapper>
  );
};

// ─── Grid 根组件 ───
const Grid: React.FC<GridProps> & {
  Row: typeof Row;
  Col: typeof Col;
} = ({ children, className = '', style, ...rest }) => {
  return (
    <div className={`auron-grid ${className}`.trim()} style={style} {...rest}>
      {children}
    </div>
  );
};

Grid.Row = Row;
Grid.Col = Col;

export { Col, Row };
export default Grid;
