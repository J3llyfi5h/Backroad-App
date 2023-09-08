const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} rel="noreferrer" target="_blank" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
