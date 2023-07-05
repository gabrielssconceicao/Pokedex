import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.components.pokeTitle.height});
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: calc(
      100% - ${({ theme }) => theme.components.pokeTitle.mediaHeight}
    );

    .image {
      width: 100%;
    }
  }
`;
