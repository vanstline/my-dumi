import React from 'react';

export type IconTaskManagerProps = React.SVGProps<SVGSVGElement>;

const IconTaskManager: React.FC<IconTaskManagerProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_task_manager" clip-path="url(#clip0_1450_5354)">\n<g id="Union">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21.5H2.5V12H10.5V21.5ZM3.5 20.5H9.5V13H3.5V20.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 21.5H13.5V15H21.5V21.5ZM14.5 20.5H20.5V16H14.5V20.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M21.5 8.5L21 9.5L20.5 8.5V3.5H14.5V11H20.5059L21.5059 11.5L20.5059 12H13.5V2.5H21.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 9H2.5V2.5H10.5V9ZM3.5 8H9.5V3.5H3.5V8Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n<defs>\n<clipPath id="clip0_1450_5354">\n<rect width="24" height="24" fill="currentColor"/>\n</clipPath>\n</defs>\n',
    }}
  />
);

export default IconTaskManager;
