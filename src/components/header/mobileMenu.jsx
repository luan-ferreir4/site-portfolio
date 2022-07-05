import { slide as Smenu } from 'react-burger-menu';
import { RiMenu5Fill } from 'react-icons/ri';

import { Menu } from '../../styles/componentStyles/headerComponentStyles/mobileMenuStyle';

const MobileMenu = () => {
  const openMenu = () => {
    alert('Funfa');
  };

  return (
    <Menu>
      <RiMenu5Fill className={'icon'} />
      <Smenu>
        <a id='home' className='menu-item' href='#'>
          Home
        </a>
        <a id='about' className='menu-item' href='#'>
          About
        </a>
        <a id='contact' className='menu-item' href='#'>
          Contact
        </a>
        <a onClick={openMenu} className='menu-item--small' href='#'>
          Settings
        </a>
      </Smenu>
    </Menu>
  );
};

export default MobileMenu;
