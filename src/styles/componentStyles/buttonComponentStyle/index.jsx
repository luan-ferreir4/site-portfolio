import styled from 'styled-components';

export const ButtonFr = styled.button`
  width: fit-content;
  padding: 2px 20px;

  border: none;
  border-radius: 10px;

  color: #282828;
  font-weight: var(--font-w-light);
  letter-spacing: 1px;

  @media (min-width: 680px) {
    padding: 5px 20px;

    border-radius: 10px;

    color: #282828;
    font-size: var(--font-size-large);
    /* font-weight: var(--font-w-medium); */
    font-size: 19px;
    font-weight: 200;
    letter-spacing: 1px;
  }

  @media (min-width: 1024px) {
  }

  &:hover {
    transition: 0.2s;
    transform: translateY(-2px);
    box-shadow: 5px 5px 10px #9a9a9a;
  }
  transition: 0.2s;
`;
