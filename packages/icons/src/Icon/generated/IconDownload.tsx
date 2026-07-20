import React from 'react';

export type IconDownloadProps = React.SVGProps<SVGSVGElement>;

const IconDownload: React.FC<IconDownloadProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_download">\n<g id="Vector">\n<path d="M9.95605 19H19.9561L20.9561 19.5L19.9561 20H9.95605L8.95605 19.5L9.95605 19Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M3 19.5L4 19H5.95605L6.95605 19.5L5.95605 20H4L3 19.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M12.0293 14.248L16.4795 9.79883L17.54 9.44531L17.1865 10.5059L11.5293 16.1621L5.87207 10.5059L5.51855 9.44531L6.5791 9.79883L11.0293 14.248L11.0293 4L11.5293 3L12.0293 4L12.0293 14.248Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconDownload;
