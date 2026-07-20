import React from 'react';

export type IconMoreProps = React.SVGProps<SVGSVGElement>;

const IconMore: React.FC<IconMoreProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_more">\n<path id="Union" d="M5.5 13.1836H3.5V11.1836H5.5V13.1836ZM13 13.1836H11V11.1836H13V13.1836ZM20.5 13.1836H18.5V11.1836H20.5V13.1836Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconMore;
