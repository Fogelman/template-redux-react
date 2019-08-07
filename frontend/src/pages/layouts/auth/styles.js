import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22212f, #3f2a43);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 90px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 15px;

    input {
      background: rgba(0, 0, 0, 0.15);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #8c8c8c;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 3px 0 0;
      border: 0;
      background: #e65a6d;
      height: 44px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#e65a6d')};
      }
    }
  }
  a {
    color: #fff;
    font-weight: bold;
    margin-top: 15 px;
    font-size: 16px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
