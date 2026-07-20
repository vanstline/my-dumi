import React from 'react';

export type IcDeleteProps = React.SVGProps<SVGSVGElement>;

const IcDelete: React.FC<IcDeleteProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_delete">\n<g id="Vector">\n<path d="M16.3213 2L16.9932 5.91504L16.0068 6.08496L15.4785 3H8.52148L7.99316 6.08496L7.00684 5.91504L7.67871 2H16.3213Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M20.5 5.5L21.5 6L20.5 6.5H3.5L2.5 6L3.5 5.5H20.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M19.0254 5.5L18.999 6.02441L18.2933 18.8444L17.8384 19.5791L17.4474 18.7654L17.9756 6.5H6.0332L6.96875 21H17L18 21.5L17 22H6.03125L4.9668 5.5H19.0254Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M14 17L15 17.5L14 18H10L9 17.5L10 17H14Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IcDelete;
