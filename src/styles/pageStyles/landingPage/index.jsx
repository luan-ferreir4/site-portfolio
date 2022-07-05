import styled from 'styled-components';

export const Landing = styled.main`
  height: 100vh;
  padding: 80px 0px 10px 0px;

  @media (min-width: 680px) {
    padding: 85px 30px 10px 30px;
  }
  @media (min-width: 1024px) {
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
