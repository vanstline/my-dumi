import React from 'react';

import { Tabs as AntTabs } from 'antd';
import type { TabsProps as AntTabsProps, TabPaneProps } from 'antd/es/tabs';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';

import './index.less';

export interface TabsProps extends AntTabsProps {
  border?: boolean;
}

interface TabsComponent extends React.FC<TabsProps> {
  TabPane: React.FC<TabPaneProps>;
}

const Tabs: TabsComponent = ({ border = true, ...props }) => {
  const borderlessClass = border ? '' : 'auron-ant-tabs-borderless';
  const mergedClassName = [props.className, borderlessClass]
    .filter(Boolean)
    .join(' ');
  return (
    <AuronConfigWrapper>
      <AntTabs {...props} className={mergedClassName || undefined} />
    </AuronConfigWrapper>
  );
};

Tabs.TabPane = AntTabs.TabPane;

export default Tabs;
