import styled from 'styled-components';

export const PokemonContainer = styled.div`
  padding: 2rem;
  height: calc(
    100vh -
      calc(
        ${({ theme }) => theme.components.nav.height} +${({ theme }) => theme.components.pagination.height}
      )
  );
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 1.5em;
  overflow: auto;
`;
