import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.components.pokemonInfo.pokeStatus.width};
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 1rem 2rem;
  border-radius: 2rem;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2.5rem;
    color: #000;
    font-weight: bold;
  }
`;
