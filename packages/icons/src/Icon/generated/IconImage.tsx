import React from 'react';

export type IconImageProps = React.SVGProps<SVGSVGElement>;

const IconImage: React.FC<IconImageProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_image">\n<path id="Union" d="M21 3.0144L20 3.5144H3.5V16.8552L7 13.8562L10.4912 16.8484L15.165 12.6423L15.5 12.3416L15.835 12.6423L20.5 16.8406V6.5144L21 5.5144L21.5 6.5144V21.5144H2.5V2.5144H20L21 3.0144ZM10.835 17.8865L10.5078 18.1794L7 15.1726L3.5 18.1726V20.5144H20.5V18.1863L20.165 17.8865L15.5 13.6873L10.835 17.8865ZM9 6.0144C10.6568 6.0144 12 7.35756 12 9.0144C12 10.6712 10.6568 12.0144 9 12.0144C7.34316 12.0144 6 10.6712 6 9.0144C6 7.35756 7.34316 6.0144 9 6.0144ZM9 7.0144C7.89544 7.0144 7 7.90985 7 9.0144C7 10.119 7.89544 11.0144 9 11.0144C10.1046 11.0144 11 10.119 11 9.0144C11 7.90985 10.1046 7.0144 9 7.0144Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconImage;
