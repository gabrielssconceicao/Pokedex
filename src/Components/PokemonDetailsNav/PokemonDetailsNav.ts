import styled from 'styled-components';

export const Container = styled.header`
  width: 70px;
  background-color: red;

  @media (max-width: 768px) {
    width: 100vw;
    height: 50px;
  }
`;
