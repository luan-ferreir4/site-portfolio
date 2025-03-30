import styled from 'styled-components';

export const Landing = styled.main`
  height: 100vh;
  padding-bottom: 10px;

  
  .sectionOne {
    display: flex;
    flex-direction: column;

    position: relative; /* Keeps it as the reference for absolute positioning */
    height: 900px;
    width: 100%;
  }
  .landingGreeting{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 15%;
    margin-bottom: 30%;
    height: 12%;
  }
  .landingGreeting__item {
    font-weight: var(--font-w-xlight);
    font-size: var(--font-size-xlarge);
  }
  .landingGreeting__item--img{
    margin-bottom: 5px;
  }

  .landingIntro {
    height: 45%;
  }

  .landingIntro__item {
    margin-bottom: 28px;
    font-size: 23px;
    font-weight: var(--font-w-xlight);
  }
  .landingIntro__item::before {
    content: '>> ';
  }
  .sectionOne_bkg{
    position: absolute;
    z-index: -1;
  
    top: 0; /* Now correctly positioned inside sectionOne */
    left: 0;
    width: 150%;
    height: auto;

    top: 45%;
    left: 22vw;
    /*border: 2px solid red;*/
    
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  }
  @media (min-width: 680px) {

    .landingIntro {
      margin-top: 80px;
      padding: 0 0 0 5vw;
    }

    .landingIntro__item {
      margin-bottom: 28px;

      font-size: 30px;
      letter-spacing: 3px;
    }
  }
  @media (min-width: 1024px) {
    .landingIntro {
      margin-top: 80px;
      padding: 0 0 0 55px;
    }
    .landingIntro__item {
      margin-bottom: 28px;

      font-size: 38px;
      letter-spacing: 4px;
    }
  }
`;
