import menuIcon from '../../assets/images/menu.svg';
import { Menu } from '../../styles/componentStyles/headerComponentStyles/headerButtonsStyles';

const MobileMenu = () => {
  return (
    <Menu>
      <img className={'icon'} src={menuIcon} alt='Menu' />
    </Menu>
  );
};

export default MobileMenu;
