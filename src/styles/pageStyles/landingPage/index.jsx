import styled from 'styled-components';

export const Landing = styled.main`
  padding: 80px 5px 10px 5px;
  max-width: 100vw;

  @media (min-width: 768px) {
    padding: 85px 30px 10px 30px;
  }
  @media (min-width: 1024px) {
  }
`;

export const Background = styled.div`
  height: 100vh;
  position: relative;

  z-index: 1;

  .reactBG {
    position: absolute;
    left: -15%;
    display: block;
    z-index: 2;
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
`;
