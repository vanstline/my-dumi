import React from 'react';

export type IconDashboardProps = React.SVGProps<SVGSVGElement>;

const IconDashboard: React.FC<IconDashboardProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_dashboard">\n<g id="Union">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 22.5H1.5V13.5H10.5V22.5ZM2.5 21.5H9.5V14.5H2.5V21.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M22 22L21 22.5H15L14 22L15 21.5H21L22 22Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M22 18L21 18.5H19L18 18L19 17.5H21L22 18Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M22 14L21 14.5H15L14 14L15 13.5H21L22 14Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M10.5 7L10 8L9.5 7V2.5H2.5V9.5H9.5L10.5 10L9.5 10.5H1.5V1.5H10.5V7Z" fill="currentColor" fill-opacity="0.9"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 10.5H13.5V1.5H22.5V10.5ZM14.5 9.5H21.5V2.5H14.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconDashboard;
