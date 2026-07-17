import React from 'react';

export type IconConfigProps = React.SVGProps<SVGSVGElement>;

const IconConfig: React.FC<IconConfigProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_config">\n<g id="Union">\n<path d="M14.75 18V20L14.25 21L13.75 20V19.5H4.25L3.25 19L4.25 18.5H13.75V18L14.25 17L14.75 18Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M21.25 19L20.25 19.5H18.25V18.5H20.25L21.25 19Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.75 11V11.5H21.25L22.25 12L21.25 12.5H11.75V13L11.25 14L10.75 13V11L11.25 10L11.75 11Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M7.25 12.5H4.25L3.25 12L4.25 11.5H7.25V12.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.75 4V6L14.25 7L13.75 6V5.5H4.25L3.25 5L4.25 4.5H13.75V4L14.25 3L14.75 4Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M21.25 5L20.25 5.5H19.25L18.25 5L19.25 4.5H20.25L21.25 5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconConfig;
