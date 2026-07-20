import React from 'react';

export type IconPinProps = React.SVGProps<SVGSVGElement>;

const IconPin: React.FC<IconPinProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_pin">\n<g id="Subtract">\n<path d="M9.95606 3.56543L19.9561 3.56543L20.9561 4.06543L19.9561 4.56543L9.95606 4.56543L8.95606 4.06543L9.95606 3.56543Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M3 4.06543L4 3.56543L5.95606 3.56543L6.95606 4.06543L5.95606 4.56543L4 4.56543L3 4.06543Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.0293 9.47949L6.5791 13.9287L5.51856 14.2822L5.87207 13.2217L11.5293 7.56543L17.1865 13.2217L17.54 14.2822L16.4795 13.9287L12.0293 9.47949L12.0293 19.7275L11.5293 20.7275L11.0293 19.7275L11.0293 9.47949Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconPin;
