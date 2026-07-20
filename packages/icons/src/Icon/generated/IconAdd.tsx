import React from 'react';

export type IconAddProps = React.SVGProps<SVGSVGElement>;

const IconAdd: React.FC<IconAddProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_add">\n<path id="Union" d="M12.4443 3V11.4824H21L22 11.9824L21 12.4824H12.4443V21L11.9443 22L11.4443 21V12.4824H3L2 11.9824L3 11.4824H11.4443V3L11.9443 2L12.4443 3Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconAdd;
