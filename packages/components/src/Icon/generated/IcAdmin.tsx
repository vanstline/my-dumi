import React from 'react';

export type IcAdminProps = React.SVGProps<SVGSVGElement>;

const IcAdmin: React.FC<IcAdminProps> = (props) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    width="24"
    height="24"
    {...props}
    dangerouslySetInnerHTML={{
      __html:
        '\n<g id="ic_admin">\n<g id="Vector">\n<path d="M50.5 58.5L53.5 60L50.5 61.5H29.5L26.5 60L29.5 58.5H50.5Z" fill="#319CFF"/>\n<path d="M54 22.5C54 15.0442 47.9558 9 40.5 9C33.0442 9 27 15.0442 27 22.5V30H54V22.5ZM57 33H24V22.5C24 13.3873 31.3873 6 40.5 6C49.6127 6 57 13.3873 57 22.5V33Z" fill="#319CFF"/>\n<path d="M69 30V58.5L67.5 61.5L66 58.5V33H15V70H66L69 71.5L66 73H12V30H69Z" fill="#319CFF"/>\n</g>\n</g>\n',
    }}
  />
);

export default IcAdmin;
