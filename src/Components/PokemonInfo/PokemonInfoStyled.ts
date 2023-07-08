import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.components.pokeTitle.height});
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    height: calc(
      100vh -
        calc(
          ${({ theme }) => theme.components.pokeTitle.mediaHeight} +
            ${({ theme }) => theme.components.pokemonNavDetails.mediaHeight}
        )
    );

    gap: 2rem;

    .image {
      width: 100%;
    }
  }
`;
