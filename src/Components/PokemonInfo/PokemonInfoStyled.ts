import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.components.pokeTitle.height});
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 1rem;
  @media (max-width: 768px) {
    height: calc(
      100% - ${({ theme }) => theme.components.pokeTitle.mediaHeight}
    );

    .image {
      width: 100%;
    }
  }
`;
