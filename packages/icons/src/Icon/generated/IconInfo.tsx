import React from 'react';

export type IconInfoProps = React.SVGProps<SVGSVGElement>;

const IconInfo: React.FC<IconInfoProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_info">\n<g id="Group 2191">\n<path id="Subtract" d="M21 21H3L12 3L21 21ZM11.3389 17.9141L12 18.5742L12.6611 17.9141L12 17.2529L11.3389 17.9141ZM11.5254 9.86621V14.5225L12.0254 15.5225L12.5254 14.5225V9.86621L12.0254 8.86621L11.5254 9.86621Z" fill="#FF7D00"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconInfo;
