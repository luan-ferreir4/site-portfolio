import python from '../assets/images/python-logo.svg';
import react from '../assets/images/reactBG2.svg';
import SymbolSample from '../assets/images/SymbolSample.svg'
import HeaderComponent from '../components/header/headerComponent';
import ContentSection from '../components/csection/contentSection';
import { Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <Landing>
        <ContentSection className='sectionOne'>
          {/* Move the background image directly inside sectionOne */}
          <img className='sectionOne_bkg' src={react} alt='React' />

          <div className='landingGreeting'>
            <img className='landingGreeting__item landingGreeting__item--img' src={SymbolSample} alt='data-tags' />
            <h1 className='landingGreeting__item'>{'< Olá >'}</h1>
            <h1 className='landingGreeting__item'>{'< Bem vindo! >'}</h1>
          </div>

          <div className='landingIntro'>
            <h2 className='landingIntro__item'>Meu nome é Luan Ferreira_</h2>
            <h2 className='landingIntro__item'>E este é meu portifólio_</h2>
          </div>
        </ContentSection>
      </Landing>
      {/*
      <Background>
        <img className={'pythonBG'} src={python} alt='Python' />
      </Background>
      */}
    </>
  );
};

export default LandingPage;
