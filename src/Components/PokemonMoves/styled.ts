import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - (${({ theme }) => theme.components.pokeTitle.height}));
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    height: calc(
      100vh -
        calc(
          ${({ theme }) => theme.components.pokeTitle.mediaHeight} +
            ${({ theme }) => theme.components.pokemonNavDetails.mediaHeight}
        )
    );
  }
`;
