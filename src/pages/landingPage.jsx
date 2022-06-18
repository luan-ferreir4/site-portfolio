import react from '../assets/images/reactBG2.svg';
import HeaderComponent from '../components/header/headerComponent';
import { Background, Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <HeaderComponent />
      <Landing>
        <h1>Hello landing page</h1>
      </Landing>
      <Background>
        <img className={'reactBG'} src={react} alt='React' />
      </Background>
    </>
  );
};

export default LandingPage;
