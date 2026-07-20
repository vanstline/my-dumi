import React from 'react';

export type IconCalibrationProps = React.SVGProps<SVGSVGElement>;

const IconCalibration: React.FC<IconCalibrationProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_calibration">\n<g id="Vector">\n<path d="M15.5166 1.5L15.6074 1.53711L21.6904 4.03711L22 4.16504V7.5H15V6.5H21V4.83496L15.3174 2.5H8.70996L3 4.83496V6.5H9V7.5H2V4.16406L8.42188 1.53711L8.51367 1.5H15.5166Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M15.5 1.50002V19L15 20L14.5 19V2.50002H9.5V21.5H14.5L15.5 22L14.5 22.5H8.5V1.50002H15.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M10 5.50002L11 6.00002L10 6.50002L9 6.5V5.50002H10Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11 14.5L12 15L11 15.5H9V14.5H11Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11 8.50002L12 9.00002L11 9.50002H9V8.50002H11Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M10 11.5L11 12L10 12.5H9V11.5H10Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M10 17.5L11 18L10 18.5H9V17.5H10Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M9.5 5.00002V19H8.5V5.00002H9.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconCalibration;
