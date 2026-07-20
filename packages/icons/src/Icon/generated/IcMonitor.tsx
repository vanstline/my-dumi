import React from 'react';

export type IcMonitorProps = React.SVGProps<SVGSVGElement>;

const IcMonitor: React.FC<IcMonitorProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_monitor">\n<g id="Vector">\n<path d="M3.5 12V5H4.5V12C4.5 16.1422 7.85784 19.5 12 19.5C16.1422 19.5 19.5 16.1422 19.5 12V5H20.5V12C20.5 16.6944 16.6944 20.5 12 20.5C7.30556 20.5 3.5 16.6944 3.5 12Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M12 4.5L13 5L12 5.5H2.5L1.5 5L2.5 4.5H12Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M21.5 4.5L22.5 5L21.5 5.5H16L15 5L16 4.5H21.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IcMonitor;
