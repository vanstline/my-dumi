import React from 'react';

export type IconHelpProps = React.SVGProps<SVGSVGElement>;

const IconHelp: React.FC<IconHelpProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="icon_help">\n<g id="Subtract">\n<path d="M12.4779 18.1956C12.9785 18.1959 13.3838 18.5999 13.3838 19.0978C13.3838 19.5956 12.9784 19.9997 12.4779 20C11.9771 20 11.5708 19.5958 11.5707 19.0978C11.5707 18.5997 11.9771 18.1956 12.4779 18.1956Z" fill="currentColor" fill-opacity="0.9"/>\n<path d="M12.4779 4C14.9751 4.00034 17 6.01369 17 8.49722C16.9999 10.7625 15.315 12.636 13.1239 12.948V14.2794L12.4779 15.5643L11.8319 14.2794V11.7095H12.4779C14.2615 11.7092 15.7079 10.271 15.708 8.49722C15.708 6.72333 14.2615 5.28526 12.4779 5.28492C10.8527 5.28492 9.51084 6.47902 9.28445 8.03294L8.45549 9.13968H8.4189L8 7.86605C8.30854 5.6811 10.1958 4 12.4779 4Z" fill="currentColor" fill-opacity="0.9"/>\n</g>\n</g>\n',
    }}
  />
);

export default IconHelp;
