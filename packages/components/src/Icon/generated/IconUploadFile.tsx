import React from 'react';

export type IconUploadFileProps = React.SVGProps<SVGSVGElement>;

const IconUploadFile: React.FC<IconUploadFileProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_upload_file">\n<path id="Union" d="M21 7.29297V11L20.5 12L20 11V8H15V3H5V21H10.5L11.5 21.5L10.5 22H4V2H15.707L21 7.29297ZM16.5 20.707V15.9141L15.0605 17.3535L14 17.707L14.3535 16.6465L17 14L19.6465 16.6465L20 17.707L18.9395 17.3535L17.5 15.9141V20.707L17 21.707L16.5 20.707ZM16 7H19.293L16 3.70703V7Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconUploadFile;
