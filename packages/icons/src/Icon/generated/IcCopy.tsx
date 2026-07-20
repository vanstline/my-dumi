import React from 'react';

export type IcCopyProps = React.SVGProps<SVGSVGElement>;

const IcCopy: React.FC<IcCopyProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_copy">\n<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.5 17.5H17.5V18L17 19L16.5 18V7.5H3.5V20.5H16.5L17.5 21L16.5 21.5H2.5V6.5H6.5V2.5H21.5V17.5ZM7.5 6.5H17.5V16.5H20.5V3.5H7.5V6.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IcCopy;
