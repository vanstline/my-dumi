import React from 'react';

export type IconShareProps = React.SVGProps<SVGSVGElement>;

const IconShare: React.FC<IconShareProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_share">\n<path id="Union" d="M8 4H3.5V21H20.5V16.5L21 15.5L21.5 16.5V22H2.5V3H8L9 3.5L8 4ZM21.5 9.5L21 10.5L20.5 9.5V4.45703L13.7842 11.1729L12.7236 11.5273L13.0771 10.4658L19.5439 4H15L14 3.5L15 3H21.5V9.5ZM20.5 4.00293V4H20.4971L20.5 4.00293Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconShare;
