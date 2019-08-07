import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 3px 0 0;
  border: 0;
  background: #e65a6d;
  height: 44px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  &:hover {
    background: ${darken(0.05, '#e65a6d')};
  }
`;
