import styled from 'styled-components';

export const Landing = styled.main`
  height: 100vh;
  padding-bottom: 10px;

  
  /*.sectionOne {
    display: flex;
    flex-direction: column;

    height: 900px;
    width: 100%;
    
    background: linear-gradient(to bottom, transparent 40%, var(--pallete-one-black) 88%);
    
    position: relative;
    overflow: hidden;
  }*/
  
  
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
    margin-left: 5vw;
  }

  .landingIntro__item {
    margin-bottom: 28px;
    font-size: 23px;
    font-weight: var(--font-w-xlight);
    font-size: var(--font-size-medium);
  }
  .landingIntro__item::before {
    content: '>> ';
  }

  @keyframes spin {
    from{
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .sectionOne_bkg{
    position: absolute;
    z-index: -1;
  
    left: 0;
    width: 150%;
    height: auto;

    top: 380px;
    left: 22vw;

    animation: spin 100s linear infinite;
  }
  @media (min-width: 680px) {


    .sectionOne {
      height: 1120px;
    }

    .landingIntro__item {
      margin-bottom: 28px;
      font-size: 30px;
      letter-spacing: 3px;
    }


    .sectionOne_bkg{
      width: 100%;
      top: 350px;
      left: 46%;
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
