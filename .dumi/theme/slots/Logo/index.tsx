import { Link, useLocale, usePrefersColor, useSiteData } from 'dumi';
import React from 'react';

import './index.less';

const Logo = function Logo() {
  const { themeConfig } = useSiteData();
  const locale = useLocale();
  const [color] = usePrefersColor();

  // 优先使用主题配置中的 logo/darkLogo，否则回退到 public 目录下的文件
  const logoSrc =
    (color === 'dark' ? themeConfig.darkLogo : themeConfig.logo) ||
    (color === 'dark' ? '/dark-logo.png' : '/logo.png');

  return /*#__PURE__*/ React.createElement(
    Link,
    {
      className: 'dumi-default-logo',
      to: 'base' in locale ? locale.base : '/',
    },
    logoSrc !== false &&
      /*#__PURE__*/ React.createElement('img', {
        src: logoSrc,
        alt: themeConfig.name,
      }),
    themeConfig.name,
  );
};

export default Logo;
