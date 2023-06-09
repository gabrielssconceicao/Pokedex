import styled, { keyframes } from 'styled-components';

const loadAnimation = keyframes`
from {
  transform: rotate(0deg);
} to {
  transform: rotate(360deg);
}`;

export const Load = styled.div`
  width: 30rem;
  height: 30rem;

  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${loadAnimation} infinite 600ms;

  @media (max-width: 425px) {
    width: 20rem;
    height: 20rem;
  }
`;
