import styled from 'styled-components';

export const Menu = styled.button`
  background: transparent;
  border: none;
  width: 42px;

  .icon {
    font-size: 28px;
    width: 85%;
    margin: auto;
  }

  .bm-overlay {
    display: none;
  }
  .bm-menu-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .bm-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: inherit;
    height: 400px;
    margin-top: 70px;
    background: transparent;
  }

  .bm-item-list {
    width: 80%;
    height: 50%;

    border-radius: 15px;
    padding: 20px 0;

    background: white;
    border-radius: 15px;
  }

  .bm-item {
    display: inline-block;

    width: fit-content;
    margin-bottom: 18px;
    margin-left: 20px;
    padding-right: 24px;
    color: black;
    border-bottom: 2px solid transparent;

    font-size: 32px;
    text-align: left;

    &:active {
      border-color: #424242d9;
    }
  }
`;
