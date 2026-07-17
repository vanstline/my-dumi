import React from 'react';

export type IconCopyProps = React.SVGProps<SVGSVGElement>;

const IconCopy: React.FC<IconCopyProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_copy">\n<g id="Vector">\n<path d="M15.5 1.50006V7.50006H21V16.0001L20.5 17.0001L20 16.0001V8.50006H14.5V2.50006H7V18.5001H20.0205L21.0205 19.0001L20.0205 19.5001H6V1.50006H15.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M21.0029 7.50488L20.2666 8.18066L14.748 2.16309L15.4844 1.4873L21.0029 7.50488Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M4 10.0001V21.5001H14V22.5001H3V10.0001H4Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconCopy;
