import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonDetailsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;

  .container {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
