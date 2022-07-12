import styled from 'styled-components';

export const Menu = styled.div`
  position: relative;

  width: 42px;

  .icon {
    position: absolute;
    left: 0;
    right: 0;

    width: 85%;
    height: 28px;
    margin: 1px auto;

    color: var(--pallete-one-black);
  }

  .bm-burger-button {
    position: relative;

    width: 100%;
    height: 30px;
    margin: 0;
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
    color: var(--pallete-one-black);
    border-bottom: 2px solid transparent;

    font-size: 32px;
    text-align: left;

    &:active {
      border-color: #424242d9;
    }
  }
`;
