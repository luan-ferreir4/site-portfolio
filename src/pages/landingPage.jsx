import python from '../assets/images/python-logo.svg';
import react from '../assets/images/reactBG2.svg';
import SymbolSample from '../assets/images/SymbolSample.svg'
import email from '../assets/images/Email.svg';
import github from '../assets/images/Github.svg';
import linkedin from '../assets/images/LinkedIn.svg';
import SymbolSampleEnding from '../assets/images/SymbolSampleEnding.svg'

import ContentSection from '../components/csection/contentSection';
import NetworksItem from '../components/socialNetworks/networksItemComponent';
import HeaderComponent from '../components/header/headerComponent';
import { Landing } from '../styles/pageStyles/landingPage';

const LandingPage = () => {
  return (
    <>
      <Landing>
        <HeaderComponent/>
        <ContentSection id='sctnOne' className='sectionOne'>
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

        <ContentSection id='sctnTwo' className='sectionTwo'>
          <img className='sectionTwo_bkg' src={python} alt='Python' />

          <h1 className='sectionTitle'>Sobre mim</h1>
          <p className='landingResume__text'>
            Estudo TI desde o ensino médio, na área de educação técnica, onde as disciplinas comuns eram intercaladas com matérias técnicas voltadas para o desenvolvimento web. Lá, aprendi os princípios da lógica, programação em C e Java, e bancos de dados com MySQL.
            <br /><br />
            Após terminar a escola, completei um curso de 2.000 horas em desenvolvimento web, metade dele focado no front-end, incluindo HTML, CSS, JavaScript e React, com ênfase na criação de código eficiente e designs responsivos. A outra metade foi dedicada ao back-end, utilizando PostgreSQL para criar os bancos de dados e Python com bibliotecas como Flask e Django para criar APIs REST. E tudo isso trabalhando com git e utilizando as metodologias ágeis Scrum e Kanban para gerenciar projetos com equipes estruturadas, simulando uma equipe de desenvolvimento real.
            <br /><br />
            No meu emprego atual, trabalho no departamento de TI/inteligência de vendas de uma empresa de distribuição de alimentos, principalmente escrevendo em SQL, desenvolvendo e atualizando relatórios no ERP Sankhya e utilizando o programa iReport para criar alguns deles. Também auxilio na administração dos dados no banco de dados, mantendo as regras de negócio atualizadas. Esses relatórios e dashboards personalizados são focados em dados comerciais. Desde movimentações específicas de estoque que os gerentes precisam acompanhar até diversos indicadores de vendas que mostram o desempenho dos fornecedores e vendedores junto aos clientes e em seus respectivos portfólios de produtos, além de muitas outras perspectivas.
            <br /><br />
            Estou cursando uma graduação em Ciência de Dados e Análise Comportamental, que acredito ser mais um passo para aprofundar meu conhecimento sobre como gerar mais valor com informações usando a tecnologia.
            <br /><br />
            Acredito que posso me agregar a diferentes ambientes de trabalho graças à minha personalidade versátil e adaptável, à minha forte vontade de aprender novas tecnologias e à minha facilidade e prazer em trabalhar em grupo.</p>
        </ContentSection>

        <ContentSection id='sctnThree' className='sectionThree'>
          <div className='projectContainer'>
            <h1 className='projectContainer__title' >Alguns Projetos</h1>
            <ul className='projectContainer__list'>
              <li className='projectContainer__listItem'>
                <a href='https://pedra-papel-tesoura-pi-five.vercel.app/' target="_blank" rel="noopener noreferrer">Jokenpô</a>
              </li>
              <li className='projectContainer__listItem'>
                <a href='https://react-entrega-s2-kenzie-hub-luan-ferreir4.vercel.app/' target="_blank" rel="noopener noreferrer">Login e registro em API</a>
              </li>
              <li className='projectContainer__listItem'>
                <a href='https://react-entrega-s3-kenzieshop-luan-ferreir4.vercel.app/' target="_blank" rel="noopener noreferrer">Loja de camisetas</a>
              </li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id='sctnFour' className='sectionFour'>
          <h1 className='sectionTitle'>Entre em contato</h1>
          <ul className='contactList'>
            <NetworksItem className='contactList__item' imgPath={github} linkPath={'https://github.com/luan-ferreir4'} linkText={'luan-ferreir4'}></NetworksItem>
            <NetworksItem className='contactList__item' imgPath={linkedin} linkPath={'https://www.linkedin.com/in/luanferreira02/'} linkText={'luanferreira02'}></NetworksItem>
            <NetworksItem className='contactList__item' imgPath={email} linkPath={'#'} linkText={'ferreirasilva.luan13@gmail.com'}></NetworksItem>
          </ul>

          <img className='sectionFooter' src={SymbolSampleEnding} alt='data-tags-ending' />
        </ContentSection>

      </Landing >
      {/*
      <Background>
        <img className={'pythonBG'} src={python} alt='Python' />
      </Background>
      */}
    </>
  );
};

export default LandingPage;
