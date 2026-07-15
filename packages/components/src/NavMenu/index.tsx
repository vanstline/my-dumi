import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Menu, type MenuProps } from 'antd';

import AuronConfigWrapper from '../_internal/AuronConfigWrapper';
import GlassContainer from '../_internal/GlassContainer';
import Popover from '../Popover';

import './index.less';

export type NavMenuItemType = NonNullable<MenuProps['items']>[number];
type NavMenuItem = Exclude<NavMenuItemType, null> & {
  key?: React.Key;
  children: any;
  selected?: boolean;
  label?: React.ReactNode;
};
type NavMenuInfo = Parameters<NonNullable<MenuProps['onClick']>>[0];

export interface NavMenuIconProps {
  /** 内置图标名称，由调用方通过 CSS/图标映射提供样式 */
  iconName?: string;
  /** SVG、图片或其他可加载资源地址 */
  iconSrc?: string;
  icon?: React.ReactNode;
}

export type NavMenuItemData = NavMenuItem & NavMenuIconProps;

export interface NavMenuProps {
  items?: MenuProps['items'];
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onClick?: MenuProps['onClick'];
  onSelect?: MenuProps['onSelect'];
  className?: string;
  style?: React.CSSProperties;
  glass?: boolean;
}

const isItem = (item: NavMenuItemType): item is NavMenuItem =>
  Boolean(item && typeof item === 'object' && 'key' in item);

const hasChildren = (
  item: NavMenuItem,
): item is NavMenuItem & { children: NavMenuItemType[] } =>
  isItem(item) && Array.isArray(item.children) && item.children.length > 0;

function isDisabled(item: NavMenuItem): boolean {
  return 'disabled' in item && item.disabled === true;
}

function renderIcon(item: NavMenuItemData) {
  if (item.icon) return item.icon;
  if (item.iconSrc) {
    return (
      <img className="auron-nav-menu-icon-image" src={item.iconSrc} alt="" />
    );
  }
  if (item.iconName) {
    return (
      <span className="auron-nav-menu-icon-name" data-icon-name={item.iconName}>
        {item.iconName}
      </span>
    );
  }
  return (
    <span className="auron-nav-menu-icon-placeholder" aria-hidden="true" />
  );
}

const NavMenuPanel: React.FC<{
  item: NavMenuItem & { children: NavMenuItemType[] };
  selectedKeys: string[];
  onClick: (info: NavMenuInfo) => void;
  onEnter: () => void;
  onLeave: () => void;
}> = ({ item, selectedKeys, onClick, onEnter, onLeave }) => (
  <div
    className="auron-nav-menu-panel"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    <div className="auron-nav-menu-panel-label">{item.label}</div>
    <Menu
      mode="vertical"
      selectable={false}
      selectedKeys={selectedKeys}
      items={item.children}
      onClick={onClick}
      className="auron-nav-menu-submenu"
    />
  </div>
);

const NavMenu: React.FC<NavMenuProps> = ({
  items = [],
  selectedKeys: selectedKeysProp,
  defaultSelectedKeys = [],
  onClick,
  onSelect,
  className = '',
  style,
  glass = false,
}) => {
  const [innerSelectedKeys, setInnerSelectedKeys] =
    useState(defaultSelectedKeys);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [lockedKey, setLockedKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Guard controlled input so a legacy callback handler cannot crash the menu
  // by accidentally passing the Ant SelectInfo object back as selectedKeys.
  const selectedKeys = Array.isArray(selectedKeysProp)
    ? selectedKeysProp
    : innerSelectedKeys;
  const selectedSet = useMemo(() => new Set(selectedKeys), [selectedKeys]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const cancelHoverClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const closeHoverMenu = useCallback(() => {
    cancelHoverClose();
    if (lockedKey === null) {
      closeTimer.current = setTimeout(() => setHoverKey(null), 40);
    }
  }, [cancelHoverClose, lockedKey]);

  const selectLeaf = useCallback(
    (info: NavMenuInfo) => {
      if (selectedKeysProp === undefined) setInnerSelectedKeys([info.key]);
      onClick?.(info);
      onSelect?.({
        selectedKeys: [info.key],
        key: info.key,
        keyPath: info.keyPath,
        domEvent: info.domEvent,
        item: info.item,
      });
      setHoverKey(null);
      setLockedKey(null);
    },
    [onClick, onSelect, selectedKeysProp],
  );

  const selectSubItem = useCallback(
    (parent: NavMenuItem, info: NavMenuInfo) => {
      const keyPath = info.keyPath?.length
        ? info.keyPath
        : [info.key, String(parent.key)];
      const nextInfo = { ...info, keyPath };
      if (selectedKeysProp === undefined) setInnerSelectedKeys([info.key]);
      onClick?.(nextInfo);
      onSelect?.({
        selectedKeys: [info.key],
        key: info.key,
        keyPath,
        domEvent: info.domEvent,
        item: info.item,
      });
      setHoverKey(null);
      setLockedKey(null);
    },
    [onClick, onSelect, selectedKeysProp],
  );

  const content = (
    <div
      className={['auron-nav-menu', glass && 'auron-nav-menu--glass', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div className="auron-nav-menu-inner">
        {(items || []).filter(Boolean).map((item) => {
          if (!isItem(item)) return null;
          const key = String(item.key);
          const data = item as NavMenuItemData;
          const submenu = hasChildren(item);
          const disabled = isDisabled(item);
          const visible =
            lockedKey === key || (lockedKey === null && hoverKey === key);
          const selected =
            selectedSet.has(key) ||
            (submenu &&
              item.children?.some(
                (child: any) =>
                  isItem(child) && selectedSet.has(String(child.key)),
              ));
          const iconButton = (
            <div
              className={[
                'auron-nav-menu-item',
                selected && 'auron-nav-menu-item--selected',
              ]
                .filter(Boolean)
                .join(' ')}
              role="menuitem"
              tabIndex={disabled ? -1 : 0}
              aria-disabled={disabled}
              onMouseEnter={() => {
                cancelHoverClose();
                if (!disabled) setHoverKey(key);
              }}
              onMouseLeave={() => lockedKey !== key && closeHoverMenu()}
              onClick={(event) => {
                if (disabled) return;
                if (submenu) {
                  event.stopPropagation();
                  setLockedKey((current) => (current === key ? null : key));
                  setHoverKey(key);
                } else {
                  selectLeaf({
                    key,
                    keyPath: [key],
                    item,
                    domEvent: event,
                  } as unknown as NavMenuInfo);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ')
                  event.currentTarget.click();
              }}
            >
              {renderIcon(data)}
            </div>
          );
          if (!submenu) return <div key={key}>{iconButton}</div>;
          return (
            <Popover
              key={key}
              glass={glass}
              visible={visible}
              trigger={[]}
              transitionName=""
              placement="right"
              overlayClassName={`auron-nav-menu-popover${
                glass ? ' auron-nav-menu-popover--glass' : ''
              }`}
              overlayInnerStyle={
                glass
                  ? {
                      background: 'transparent',
                      boxShadow: 'none',
                      border: 'none',
                    }
                  : undefined
              }
              content={
                glass ? (
                  <GlassContainer
                    padding={0}
                    radius={22}
                    className="auron-nav-menu-glass-panel"
                  >
                    <NavMenuPanel
                      item={item}
                      selectedKeys={selectedKeys}
                      onClick={(info) => selectSubItem(item, info)}
                      onEnter={() => {
                        cancelHoverClose();
                        setHoverKey(key);
                      }}
                      onLeave={() => lockedKey !== key && closeHoverMenu()}
                    />
                  </GlassContainer>
                ) : (
                  <NavMenuPanel
                    item={item}
                    selectedKeys={selectedKeys}
                    onClick={(info) => selectSubItem(item, info)}
                    onEnter={() => {
                      cancelHoverClose();
                      setHoverKey(key);
                    }}
                    onLeave={() => lockedKey !== key && closeHoverMenu()}
                  />
                )
              }
            >
              <div>{iconButton}</div>
            </Popover>
          );
        })}
      </div>
    </div>
  );

  return (
    <AuronConfigWrapper>
      {glass ? (
        <GlassContainer
          padding={0}
          radius={54}
          className="auron-nav-menu-glass-shell"
          style={{ display: 'inline-block', width: 54, verticalAlign: 'top' }}
        >
          {content}
        </GlassContainer>
      ) : (
        content
      )}
    </AuronConfigWrapper>
  );
};

export default NavMenu;
