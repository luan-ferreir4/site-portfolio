import styled from 'styled-components';

export const HeaderItem = styled.a`
  width: fit-content;
  padding: 5px 20px;

  border-bottom: 1px solid transparent;
  margin: 0 5%;
  color: var(--palette-one-white);
  background-color: transparent;
  font-weight: var(--font-w-light);
  letter-spacing: 1px;

  &:hover {
    border-bottom: 1px solid var(--palette-one-white);
    transition: 0.2s;
    /*transform: translateY(-2px);*/
  }
  transition: 0.2s;
`;
