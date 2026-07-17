import React from 'react';

export type IconNotificationProps = React.SVGProps<SVGSVGElement>;

const IconNotification: React.FC<IconNotificationProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_notification">\n<path id="Subtract" d="M12 1.5C16.1421 1.5 19.5 4.85786 19.5 9V15.501L19 16.501L18.5 15.501V9C18.5 5.41014 15.5899 2.5 12 2.5C8.41014 2.5 5.5 5.41014 5.5 9V18.5H18L20.125 18.501L21 18.5L22 19L21 19.5H15C15 21.1568 13.6568 22.5 12 22.5C10.3432 22.5 9 21.1568 9 19.5H3L2 19L3 18.5H4.5V9C4.5 4.85786 7.85786 1.5 12 1.5ZM10 19.5C10 20.6046 10.8954 21.5 12 21.5C13.1046 21.5 14 20.6046 14 19.5H10Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n',
    }}
  />
);

export default IconNotification;
