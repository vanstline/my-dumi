import React from 'react';

export type IconDownloadFileProps = React.SVGProps<SVGSVGElement>;

const IconDownloadFile: React.FC<IconDownloadFileProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_download_file">\n<path id="Union" d="M21 7.29297V11L20.5 12L20 11V8H15V3H5V21H10.5L11.5 21.5L10.5 22H4V2H15.707L21 7.29297ZM17.5 15V19.793L18.9395 18.3535L20 18L19.6465 19.0605L17 21.707L14.3535 19.0605L14 18L15.0605 18.3535L16.5 19.793V15L17 14L17.5 15ZM16 7H19.293L16 3.70703V7Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconDownloadFile;
