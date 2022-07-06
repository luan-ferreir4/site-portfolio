import python from '../assets/images/python-logo.svg';
import react from '../assets/images/reactBG2.svg';
import HeaderComponent from '../components/header/headerComponent';
import { Background, Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <HeaderComponent />
      <Landing>
        <div className='landingGreeting'>
          <h1 className='landingGreeting__item'>{'< Olá >'}</h1>
          <h1 className='landingGreeting__item'>{'< Bem vindo! >'}</h1>
        </div>
      </Landing>
      <Background>
        <img className={'reactBG'} src={react} alt='React' />
        <img className={'pythonBG'} src={python} alt='Python' />
      </Background>
    </>
  );
};

export default LandingPage;
