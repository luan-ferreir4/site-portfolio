// Add prop to select social media within a object
const NetworksItem = ({imgPath, linkPath, linkText, className}) => {
  return (
    <li className={className}>
      <img src={imgPath} alt="Network" />
      <a href={linkPath}>{linkText}</a>
    </li>
  );
};

export default NetworksItem;
