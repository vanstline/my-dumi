import React from 'react';

export type IconSingleProps = React.SVGProps<SVGSVGElement>;

const IconSingle: React.FC<IconSingleProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_single">\n<g id="Vector">\n<path d="M22.5 3V13.5L22 14.5L21.5 13.5V4H2.5V16H21.4971L22.4971 16.5L21.4971 17H1.5V3H22.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M7.5 11.5L8 10.5L8.5 11.5V12.5L8 13.5L7.5 12.5V11.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.5 16H12.5V20H11.5V16Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.5 9.5L12 8.5L12.5 9.5V12.5L12 13.5L11.5 12.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M15.5 7.5L16 6.5L16.5 7.5V12.5L16 13.5L15.5 12.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M17.5 20L18.5 20.5L17.5 21H6.5L5.5 20.5L6.5 20H17.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconSingle;
