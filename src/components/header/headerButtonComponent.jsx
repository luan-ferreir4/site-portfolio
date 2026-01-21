import { HeaderItem } from '../../styles/componentStyles/headerComponentStyles/headerItemStyle';
const HeaderButton = ({ content,path }) => {
  return <HeaderItem href={path}>{content}</HeaderItem>;
};

export default HeaderButton;
