import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  width: ${({ theme }) => theme.components.pokemonInfo.pokeImg.width};
  height: ${({ theme }) => theme.components.pokemonInfo.pokeImg.height};
  max-height: ${({ theme }) => theme.components.pokemonInfo.pokeImg.maxHeight};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  img {
    width: ${({ theme }) => theme.components.pokemonInfo.pokeImg.imgWidth};
    object-fit: contain;
    color: #000;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
  }
`;
