import python from '../assets/images/python-logo.svg';
import react from '../assets/images/reactBG2.svg';
import SymbolSample from '../assets/images/SymbolSample.svg'
import ContentSection from '../components/csection/contentSection';
import { Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <Landing>
        <ContentSection className='sectionOne'>
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
        <ContentSection className='sectionTwo'>
          <img className='sectionTwo_bkg' src={python} alt='Python' />

          <h1 className='landingGreeting__item title'>{'>> Sobre mim'}</h1>
          <p className='landingResume__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis  augue non urna mollis efficitur. Etiam hendrerit tempus consequat.  Mauris non condimentum nisi. Fusce sed sapien eget eros venenatis  ultrices sit amet non dui. Morbi vitae aliquet elit. Phasellus posuere  enim diam, at placerat velit gravida vel. In hac habitasse platea  dictumst. In scelerisque eu mi eu dictum.</p>
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
