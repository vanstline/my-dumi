import React from 'react';

export type IconFailureProps = React.SVGProps<SVGSVGElement>;

const IconFailure: React.FC<IconFailureProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_failure">\n<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.05078C16.4183 4.05078 20 7.6325 20 12.0508C19.9999 16.4689 16.4182 20.0508 12 20.0508C7.5818 20.0508 4.00013 16.4689 4 12.0508C4 7.6325 7.58172 4.05078 12 4.05078ZM16.4502 7.2334L12 11.6836L7.5498 7.2334L7 7.05078L7.18359 7.60059L11.6338 12.0508L7.18359 16.501L7 17.0508L7.5498 16.8672L12 12.417L16.4502 16.8672L17 17.0508L16.8164 16.501L12.3662 12.0508L16.8164 7.60059L17 7.05078L16.4502 7.2334Z" fill="#F53F3F"/>\n</g>\n',
    }}
  />
);

export default IconFailure;
