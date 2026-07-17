import React from 'react';

export type IcEditProps = React.SVGProps<SVGSVGElement>;

const IcEdit: React.FC<IcEditProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_edit">\n<g id="Vector">\n<path d="M20.5 20.6035L21.5 21.1035L20.5 21.6035H3.5L2.5 21.1035L3.5 20.6035H20.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M19.707 6.75781L11.231 15.2778L10.1875 15.5703L10.4637 14.5871L18.293 6.75684L15.3477 3.81055L5.5 13.6689V16.6035H7.6582L8.6582 17.1035L7.6582 17.6035H4.5V13.2568L15.3477 2.39648L19.707 6.75781Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IcEdit;
