import React from 'react';

export type IconInteractiveProps = React.SVGProps<SVGSVGElement>;

const IconInteractive: React.FC<IconInteractiveProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_interactive">\n<g id="Group 2183">\n<path id="Union" d="M21.5 18L21 19L20.5 18V14.5H14.5V20.5H20.5L21.5 21L20.5 21.5H13.5V18H6.5V15L7 14L7.5 15V17H13.5V13.5H21.5V18ZM10.5 6H18V9L17.5 10L17 9V7H10.5V10.5H2.5V2.5H10.5V6ZM3.5 9.5H9.5V3.5H3.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconInteractive;
