import React from 'react';

export type IconSafetyProps = React.SVGProps<SVGSVGElement>;

const IconSafety: React.FC<IconSafetyProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_safety">\n<path id="Subtract" d="M21.1406 4.14746L21.5 4.25293V10.0166C21.5 12.3946 20.8834 14.664 19.7812 16.6475L18.7041 17.1748L18.9473 16.0869C19.9433 14.2668 20.5 12.191 20.5 10.0166V5.00195L12.0039 2.51953L3.5 5.00195V10.0146C3.50013 15.4091 6.91835 20.201 12.002 21.9688C13.6989 21.3783 15.2084 20.4489 16.4688 19.2744L17.5498 18.8799L17.1758 19.9873C15.7689 21.3052 14.0709 22.3376 12.1592 22.9746L12.001 23.0273L11.8438 22.9746C6.26437 21.1161 2.50013 15.8954 2.5 10.0146V4.25293L11.8643 1.52051L12.0039 1.47949L21.1406 4.14746Z" fill="currentColor" fill-opacity="0.9"/>\n<path id="Vector (Stroke)" d="M17.5863 9.35352L11.2328 15.707L7.8574 12.3316L7.73279 11.5L8.58895 11.6491L11.2328 14.293L16.8793 8.64648L17.5863 9.35352Z" fill="#262626"/>\n</g>\n',
    }}
  />
);

export default IconSafety;
