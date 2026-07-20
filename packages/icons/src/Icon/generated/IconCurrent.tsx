import React from 'react';

export type IconCurrentProps = React.SVGProps<SVGSVGElement>;

const IconCurrent: React.FC<IconCurrentProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_current">\n<path id="Vector (Stroke)" d="M19.5283 1.5L14.0293 8.5H21.5713L11.9029 20.1459L11 20.3438L11.1407 19.4989L19.4287 9.5H11.9717L17.4707 2.5H9.80273L4.82715 12H11.6484L9.18264 21.3834L8.5 22L8.2155 21.1307L10.3516 13H3.17383L9.05664 1.76758L9.19727 1.5H19.5283Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconCurrent;
