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
          <p className='landingResume__text'>
            I've been studying IT since high school, where it was integrated with web development. There I learned the principles of logic, programming, and databases using C, Java, and MySQL.
            <br/><br/>
            After that, I completed a 2,000-hour course in web development, with half of it focused on the front end, including HTML, CSS, JavaScript, and React, and the other half on the back end, utilizing PostgreSQL, Python, and libraries such as Flask and Django to create REST APIs. And all of that working with the agile methods of Scrum and Kanban with random teams to simulate a real-life development team.
            <br/><br/>
            In my current job, I assist the IT department of a food distribution company with SQL reports on the ERP Sankhya and use the IReport program to build some of them. I believe that I can aggregate with my versatile and adaptable personality, strong will to learn new technologies and ease and enjoyment of working in a group.</p>
        </ContentSection>

        <ContentSection className='sectionThree'>
          <div className='projectContainer'>
            <h1 className='projectContainer__item' >Data Projects</h1>
            <div className='projectContainer__slide'>
              z
            </div>
          </div>
          <div className='projectContainer'>
            <h1 className='projectContainer__item title__right' >Web Projects</h1>
            <div className='projectContainer__slide'>

            </div>
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
