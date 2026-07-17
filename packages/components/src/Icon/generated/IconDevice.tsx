import React from 'react';

export type IconDeviceProps = React.SVGProps<SVGSVGElement>;

const IconDevice: React.FC<IconDeviceProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_device">\n<g id="Vector">\n<path d="M16.5 12.5078L6.5 12.5039V7.5H7.5V11.5039L17.5 11.5088V16.5H16.5V12.5078Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.5 18.5L15.5 19L14.5 19.5H9.5L8.5 19L9.5 18.5H14.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.5 4.5L15.5 5L14.5 5.5H9.5L8.5 5L9.5 4.5H14.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M22.5 1.5V5L22 6L21.5 5V2.5H2.5V7.5H21.5078L22.5078 8L21.5078 8.5H1.5V1.5H22.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M22.5 15.5V22.5H1.5V15.5H22.5ZM2.5 21.5H21.5V16.5H2.5V21.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconDevice;
