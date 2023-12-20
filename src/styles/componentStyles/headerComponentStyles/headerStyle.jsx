import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;

  width: 95vw;
  height: 36px;
  padding: 16px 20px;
  margin: 15px auto;

  border-radius: 25px;
  background: var(--palette-one-white);

  @media (min-width: 768px) {
    width: 96vw;
    height: 60px;
    padding: 10px 20px;
  }

  @media (min-width: 1024px) {
  }
`;

export const MobileContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  img {
    width: 70px;
  }

  @media (min-width: 680px) {
    display: none;
  }
`;

export const DesktopContent = styled.section`
  display: none;
  @media (min-width: 680px) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    img {
      position: absolute;
      right: 0;
      left: 0;

      width: 100px;
      margin: 0 auto;
    }
  }
`;
