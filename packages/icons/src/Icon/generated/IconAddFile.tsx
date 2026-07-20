import React from 'react';

export type IconAddFileProps = React.SVGProps<SVGSVGElement>;

const IconAddFile: React.FC<IconAddFileProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_add_file">\n<path id="Union" d="M20 7.29297V11L19.5 12L19 11V8H14V3H4V21H9.5L10.5 21.5L9.5 22H3V2H14.707L20 7.29297ZM17 14V17H20L21 17.5L20 18H17V21L16.5 22L16 21V18H13L12 17.5L13 17H16V14L16.5 13L17 14ZM15 7H18.293L15 3.70703V7Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconAddFile;
