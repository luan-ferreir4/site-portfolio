import python from '../assets/images/python-logo.svg';
import react from '../assets/images/reactBG2.svg';
import SymbolSample from '../assets/images/SymbolSample.svg'
import HeaderComponent from '../components/header/headerComponent';
import ContentSection from '../components/csection/contentSection';
import { Background, Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <Landing>
        <ContentSection className='landingGreeting'>

          <img className='landingGreeting__item' src={SymbolSample} alt='data-tags' />
          <h1 className='landingGreeting__item'>{'< Olá >'}</h1>
          <h1 className='landingGreeting__item'>{'< Bem vindo! >'}</h1>

          <h2 className='landingIntro__item'>Meu nome é Luan Ferreira_</h2>
          <h2 className='landingIntro__item'>E sou um desenvolvedor full-stack_</h2>

        </ContentSection>
      </Landing>
      {/*
      <Background>
        <img className={'reactBG'} src={react} alt='React' />
        <img className={'pythonBG'} src={python} alt='Python' />
      </Background>
      */}
    </>
  );
};

export default LandingPage;
