import React from 'react';

export type IconRemoveProps = React.SVGProps<SVGSVGElement>;

const IconRemove: React.FC<IconRemoveProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_remove">\n<path id="Line 3 (Stroke)" d="M20.7195 11.8962L21.7195 12.3962L20.7195 12.8962H2.74097L1.74097 12.3962L2.74097 11.8962H20.7195Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconRemove;
