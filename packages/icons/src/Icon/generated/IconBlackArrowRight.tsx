import React from 'react';

export type IconBlackArrowRightProps = React.SVGProps<SVGSVGElement>;

const IconBlackArrowRight: React.FC<IconBlackArrowRightProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_black_arrow_right">\n<path id="Union" d="M15.207 6.35352L21.207 12.3535L15.207 18.3535L14.1465 18.707L14.5 17.6465L19.293 12.8535H12.4609L11.4609 12.3535L12.4609 11.8535H19.293L14.5 7.06055L14.1465 6L15.207 6.35352ZM9.46094 12.3535L8.46094 12.8535H3L2 12.3535L3 11.8535H8.46094L9.46094 12.3535Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconBlackArrowRight;
