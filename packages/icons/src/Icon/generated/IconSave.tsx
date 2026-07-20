import React from 'react';

export type IconSaveProps = React.SVGProps<SVGSVGElement>;

const IconSave: React.FC<IconSaveProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_save">\n<g id="Union">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3L16.5 3.5H13V7.5H7V3.5H4V20.5H21V8L21.5 7L22 8V21.5H3V2.5H16.5L17.5 3ZM8 6.5H12V3.5H8V6.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M12.0039 17L11.0039 17.5H8L7 17L8 16.5H11.0039L12.0039 17Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M17 13L16 13.5H8L7 13L8 12.5H16L17 13Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconSave;
