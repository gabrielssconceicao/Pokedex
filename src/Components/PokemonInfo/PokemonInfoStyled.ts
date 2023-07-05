import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.components.pokeTitle.height});
  display: grid;

  grid-template-areas:
    'img  desc'
    '.    desc';

  .image {
    grid-area: img;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray400};
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 40%;
    }
  }
  .description {
    grid-area: 'desc';
    width: 100%;
    background: blue;
  }

  @media (max-width: 768px) {
    height: calc(
      100% - ${({ theme }) => theme.components.pokeTitle.mediaHeight}
    );

    grid-template-areas: 'img ' 'desc ' 'h';

    .image {
      width: 100%;
    }
  }
`;
