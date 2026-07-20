import React from 'react';

export type IconVoiceProps = React.SVGProps<SVGSVGElement>;

const IconVoice: React.FC<IconVoiceProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_voice">\n<g id="Vector">\n<path d="M4 11V10.5L4.5 9.5L5 10.5V11C5 14.866 8.13399 18 12 18C15.866 18 19 14.866 19 11V10.5L19.5 9.5L20 10.5V11C20 15.4183 16.4183 19 12 19C7.58171 19 4 15.4183 4 11Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M11.5 18H12.5V22L12 23L11.5 22V18Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M12 1C14.2091 1 16 2.79086 16 5V8.5L15.5 9.5L15 8.5V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.5C9 13.1569 10.3431 14.5 12 14.5C13.2929 14.5 14.3908 13.6807 14.8125 12.5342L15.4258 11.5H15.4277L15.8047 12.7344C15.2844 14.3393 13.7783 15.5 12 15.5C9.79086 15.5 8 13.7091 8 11.5V5C8 2.79086 9.79086 1 12 1Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconVoice;
