import React from 'react';

export type IconSuccessProps = React.SVGProps<SVGSVGElement>;

const IconSuccess: React.FC<IconSuccessProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_success">\n<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM6.72949 13.501L11.2979 16.708L11.5967 16.9258L13.4453 13.7246L13.4092 13.1191L12.8506 13.418L11.3877 15.9502L7.14355 12.9824L6.5791 12.8838L6.72949 13.501ZM15.9717 8.01172L13.957 11.5029L14.001 12.0938L14.5791 11.7598L16.5791 8.2959L16.5283 7.71582L15.9717 8.01172Z" fill="#39C02D"/>\n</g>\n',
    }}
  />
);

export default IconSuccess;
