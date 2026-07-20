import React from 'react';

export type IconTagProps = React.SVGProps<SVGSVGElement>;

const IconTag: React.FC<IconTagProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_tag">\n<path id="Union" d="M20.5 19L20 20L19.5 19V2.5H4.5V21.1904L11.7764 17.5527L12.0137 17.4346L12.2451 17.5645L19.5 21.6338L20 22.5H19.001L11.9863 18.5654L3.5 22.8086V1.5H20.5V19ZM16 9L15 9.5H9L8 9L9 8.5H15L16 9Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconTag;
