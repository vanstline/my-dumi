import React from 'react';

export type IconLikeProps = React.SVGProps<SVGSVGElement>;

const IconLike: React.FC<IconLikeProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_like">\n<path id="Union" d="M13.4189 8.97266H22L19.5322 18.1807L18.8057 18.9619V17.9951L20.6963 9.97266H12.4189V3.4043H10.4062L7.12988 11.2568V20.4932H17.5195L18.5195 20.9932L17.5195 21.4932H7.12988V21.5H1.62988V10.5H6.36133L9.61133 2.71191L9.73926 2.4043H13.4189V8.97266ZM2.62988 20.5H6.12988V11.5H2.62988V20.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconLike;
