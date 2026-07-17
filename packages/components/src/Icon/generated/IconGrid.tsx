import React from 'react';

export type IconGridProps = React.SVGProps<SVGSVGElement>;

const IconGrid: React.FC<IconGridProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_grid">\n<path id="Union" d="M5.5 20.5H3.5V18.5H5.5V20.5ZM13 20.5H11V18.5H13V20.5ZM20.5 20.5H18.5V18.5H20.5V20.5ZM5.5 13.1836H3.5V11.1836H5.5V13.1836ZM13 13.1836H11V11.1836H13V13.1836ZM20.5 13.1836H18.5V11.1836H20.5V13.1836ZM5.5 5.5H3.5V3.5H5.5V5.5ZM13 5.5H11V3.5H13V5.5ZM20.5 5.5H18.5V3.5H20.5V5.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconGrid;
