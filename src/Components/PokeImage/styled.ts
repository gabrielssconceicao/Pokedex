import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.components.pokemonInfo.pokeImg.width};
  height: ${({ theme }) => theme.components.pokemonInfo.pokeImg.height};
  max-height: ${({ theme }) => theme.components.pokemonInfo.pokeImg.maxHeight};
  background-color: ${({ theme }) => theme.colors.gray400};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  img {
    width: 75%;
    object-fit: contain;
    color: #000;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
