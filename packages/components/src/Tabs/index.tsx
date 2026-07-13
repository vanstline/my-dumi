import React from 'react';

import { Tabs as AntTabs } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import type { TabsProps as AntTabsProps, TabPaneProps } from 'antd/es/tabs';

import './index.less';

export type TabsProps = AntTabsProps;

interface TabsComponent extends React.FC<TabsProps> {
  TabPane: React.FC<TabPaneProps>;
}

/**
 * Auron 选项卡
 * 完全透传 antd v4 Tabs，仅注入 auron-ant 前缀。
 */
const Tabs: TabsComponent = (props) => (
  <AuronConfigWrapper>
    <AntTabs {...props} />
  </AuronConfigWrapper>
);

Tabs.TabPane = AntTabs.TabPane;

export default Tabs;
