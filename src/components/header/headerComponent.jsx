import headerSymbol from '../../assets/images/symbol.svg';
import {
  DesktopContent,
  Header,
  MobileContent,
} from '../../styles/componentStyles/headerComponentStyles/headerStyle';
import ButtonComponent from '../button/buttonComponent';
import MobileMenu from './mobileMenuComponent';

const HeaderComponent = () => {
  return (
    <Header>
      <MobileContent>
        <MobileMenu />
        <img clasname={'symbol'} src={headerSymbol} alt='Logo' />
      </MobileContent>

      <DesktopContent>
        <ButtonComponent content={'Showcase'} />
        <img clasname={'symbol'} src={headerSymbol} alt='Logo' />
        <ButtonComponent className={'buttons'} content={'Baixar currículo'} />
      </DesktopContent>
    </Header>
  );
};

export default HeaderComponent;
