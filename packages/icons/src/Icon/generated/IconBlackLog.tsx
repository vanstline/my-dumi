import React from 'react';

export type IconBlackLogProps = React.SVGProps<SVGSVGElement>;

const IconBlackLog: React.FC<IconBlackLogProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_black_log">\n<g id="Vector">\n<path d="M19.4927 3V17.5L18.9927 18.5L18.4927 17.5V4H5.49268V20H18.5073L19.5073 20.5L18.5073 21H4.49268V3H19.4927Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.4927 9L15.4927 9.5L14.4927 10H9.49268L8.49268 9.5L9.49268 9H14.4927Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.4927 13L15.4927 13.5L14.4927 14H9.49268L8.49268 13.5L9.49268 13H14.4927Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconBlackLog;
