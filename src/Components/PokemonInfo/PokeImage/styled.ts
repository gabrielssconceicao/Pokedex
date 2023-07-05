import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: ${({ theme }) => theme.components.pokemonInfo.height};
  max-height: ${({ theme }) => theme.components.pokemonInfo.maxHeight};
  background-color: ${({ theme }) => theme.colors.gray400};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  img {
    width: 90%;
    object-fit: cover;
    color: #000;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
