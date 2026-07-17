import React from 'react';

export type IconHomeProps = React.SVGProps<SVGSVGElement>;

const IconHome: React.FC<IconHomeProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_home">\n<g id="Vector">\n<path d="M19.0029 9.24023L12.0029 3.64062L5.00293 9.24023V20.5H9.99316V21.5H4.00293V8.75977L4.19043 8.60938L12.0029 2.35938L19.8154 8.60938L20.0029 8.75977V17.5537L19.5029 18.5537L19.0029 17.5537V9.24023Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M19.0034 20.5L20.0034 21L19.0034 21.5H14.0004V20.5H19.0034Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M15.0029 14V21H14.0029V15H10.0029V21H9.00293V14H15.0029Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconHome;
