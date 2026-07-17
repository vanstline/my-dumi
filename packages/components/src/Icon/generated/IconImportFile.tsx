import React from 'react';

export type IconImportFileProps = React.SVGProps<SVGSVGElement>;

const IconImportFile: React.FC<IconImportFileProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_import_file">\n<path id="Union" d="M21 7.29297V11L20.5 12L20 11V8H15V3H5V21H10.5L11.5 21.5L10.5 22H4V2H15.707L21 7.29297ZM19.8535 18.3535H15.0605L16.5 19.793L16.8535 20.8535L15.793 20.5L13.1465 17.8535L15.793 15.207L16.8535 14.8535L16.5 15.9141L15.0605 17.3535H19.8535L20.8535 17.8535L19.8535 18.3535ZM16 7H19.293L16 3.70703V7Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconImportFile;
