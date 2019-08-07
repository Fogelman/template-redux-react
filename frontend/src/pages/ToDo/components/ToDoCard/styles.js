import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  margin: 10px 0px;
  p {
    height: 40px;
    text-align: center;
  }

  div {
    button {
      margin: 3px 5px 5px;
      padding: 0 5px;
      border: 0;
      height: 20px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;

      &:last-child {
        background: #6ab9f3;
        &:hover {
          background: ${darken(0.05, '#6ab9f3')};
        }
      }

      &:first-child {
        background: #e65a6d;
        &:hover {
          background: ${darken(0.05, '#e65a6d')};
        }
      }
    }
  }
`;

export const Text = styled.textarea`
  background: none;
  padding: 15px;
  width: 100%;
  outline: none;
  overflow: hidden;
  border: none;
  overflow: auto;
  resize: none;
  font-size: 20px;
  height: 100px;
`;
