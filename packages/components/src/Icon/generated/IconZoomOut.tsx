import React from 'react';

export type IconZoomOutProps = React.SVGProps<SVGSVGElement>;

const IconZoomOut: React.FC<IconZoomOutProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_zoom_out">\n<g id="Union">\n<path d="M10.5 1.5C15.4705 1.5 19.5 5.52946 19.5 10.5C19.5 10.7364 19.4886 10.9704 19.4707 11.2021L18.8115 12.1416L18.4805 11.0264C18.4918 10.8523 18.5 10.6769 18.5 10.5C18.5 6.08174 14.9183 2.5 10.5 2.5C6.08174 2.5 2.5 6.08174 2.5 10.5C2.5 14.9183 6.08174 18.5 10.5 18.5C13.3387 18.5 15.83 17.0201 17.25 14.791L18.127 14.2041L18.1045 15.3076C17.8371 15.7293 17.5377 16.1286 17.2061 16.499L21.208 20.5L20.8535 20.8535L20.5 21.208L16.499 17.2061C14.9067 18.6315 12.8053 19.5 10.5 19.5C5.52946 19.5 1.5 15.4705 1.5 10.5C1.5 5.52946 5.52946 1.5 10.5 1.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11 10L11.002 10.002L12.499 10L13.5 10.5L12.501 11L11.0049 11.002L11 11H10.5078L10 11.002L10.0049 11.0049L8.50879 11.0078L7.50781 10.5078L8.50684 10.0078L10.002 10.0049L10 10.0049L10.5 10H11Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconZoomOut;
