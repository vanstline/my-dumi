import React from 'react';

export type IconPauseProps = React.SVGProps<SVGSVGElement>;

const IconPause: React.FC<IconPauseProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_pause">\n<g id="Vector">\n<path d="M8.96826 9.5L9.46826 8.5L9.96826 9.5V14.5L9.46826 15.5L8.96826 14.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M13.9683 9.5L14.4683 8.5L14.9683 9.5V14.5L14.4683 15.5L13.9683 14.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.9683 1.5C17.7673 1.5 22.4683 6.20101 22.4683 12C22.4683 14.1912 21.7952 16.2241 20.647 17.9072L19.6841 18.2617L19.8384 17.3174C20.8663 15.8 21.4683 13.9708 21.4683 12C21.4683 6.75329 17.215 2.5 11.9683 2.5C6.72155 2.5 2.46826 6.75329 2.46826 12C2.46826 17.2467 6.72155 21.5 11.9683 21.5C13.9352 21.5 15.7602 20.899 17.2759 19.875L18.3228 19.7803L17.9351 20.6387C16.2405 21.8116 14.1852 22.5 11.9683 22.5C6.16927 22.5 1.46826 17.799 1.46826 12C1.46826 6.20101 6.16927 1.5 11.9683 1.5Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconPause;
