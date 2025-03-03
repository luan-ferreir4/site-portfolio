import styled from 'styled-components';

export const Landing = styled.main`
  height: 100vh;
  padding: 80px 0px 10px 0px;
  background-color: #1c1c1c;

  .landingGreeting {
    width: 90%;
    margin: 30px auto;
    text-align: center;
  }
  .landingGreeting__item {
    font-weight: var(--font-w-regular);
  }

  .landingIntro {
    padding: 0 0 0 4vw;
  }

  .landingIntro__item {
    margin-bottom: 28px;
    font-size: 23px;
    font-weight: var(--font-w-xlight);
  }
  .landingIntro__item::before {
    content: '>> ';
  }

  @media (min-width: 680px) {
    padding: 85px 0px 10px 0px;

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

export const Background = styled.div`
  height: 100vh;
  position: relative;
  z-index: -2;

  .reactBG {
    position: absolute;
    left: -15%;
    display: block;
    z-index: -1;
    width: 34vw;

    object-fit: cover;
    object-position: left top;

    animation: App-logo-spin infinite 50s linear;

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }

  .pythonBG {
    position: absolute;
    right: -0%;
    top: 70%;
    z-index: -1;
    width: 18vw;
  }

  @media (min-width: 680px) {
    .pythonBG {
      top: 100%;
    }
  }
  @media (min-width: 1024px) {
  }
`;
