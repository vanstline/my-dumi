import React from 'react';

export type IconChevronDownProps = React.SVGProps<SVGSVGElement>;

const IconChevronDown: React.FC<IconChevronDownProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_chevron_down">\n<path id="Vector (Stroke)" d="M7.33211 9.19832L12.625 14.4912L17.9179 9.19832L18.9785 8.84473L18.6249 9.90535L12.625 15.9053L6.62508 9.90535L6.27148 8.84473L7.33211 9.19832Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconChevronDown;
