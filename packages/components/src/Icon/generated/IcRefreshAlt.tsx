import React from 'react';

export type IcRefreshAltProps = React.SVGProps<SVGSVGElement>;

const IcRefreshAlt: React.FC<IcRefreshAltProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_refresh_alt">\n<g id="Vector">\n<path d="M2.5 12.6075L3 11.6075L3.5 12.6075V20.6036H20.5L21.5 21.1036L20.5 21.6036H2.5V12.6075Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M20.5 12.6034L21 11.6034L21.5 12.6034V18.6034L21 19.6034L20.5 18.6034V12.6034Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M16.6979 7.09426L16.8535 7.95691L16.0838 7.65713L12 3.81042L8.09302 7.65713L7.14648 7.95691L7.38832 7.00804L12 2.39636L16.6979 7.09426Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.4958 3.60339L11.9958 2.60339L12.4958 3.60339V15.6034L11.9958 16.6034L11.4958 15.6034V3.60339Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IcRefreshAlt;
