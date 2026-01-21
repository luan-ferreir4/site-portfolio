import { Header } from '../../styles/componentStyles/headerComponentStyles/headerStyle';
import HeaderButton from './headerButtonComponent';

const HeaderComponent = () => {
  return (
    <Header>
        <HeaderButton content={'Sobre mim'} path='#sctnTwo' />
        <HeaderButton content={'Projetos'} path='#sctnThree' />
        <HeaderButton content={'Contatos'} path='#sctnFour' />
    </Header>
  );
};

export default HeaderComponent;
