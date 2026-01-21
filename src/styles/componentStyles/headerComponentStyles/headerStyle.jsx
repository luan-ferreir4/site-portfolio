import styled from 'styled-components';

export const Header = styled.header`
  display: none;
  @media (min-width:1024px) {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom,var(--pallete-one-dark-black), #141414,var(--pallete-one-black));

  }
`;
