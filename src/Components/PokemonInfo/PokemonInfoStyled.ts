import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.components.pokeTitle.height});
  display: grid;
  grid-template-areas:
    'img  img  desc'
    'img  img   hw'
    'img  img   ab'
    'loc  loc  loc '
    'stts stts stts '
    'evol evol evol';
  .image {
    grid-area: img;
    background: red;
  }
  .description {
    grid-area: desc;
    background: blue;
  }
  .weight-height {
    grid-area: hw;
    background: purple;
  }

  .abilities {
    grid-area: ab;
    background: green;
  }
  .status {
    grid-area: stts;
    background: pink;
  }
  .location {
    grid-area: loc;
    background: yellow;
  }
  .evolution {
    grid-area: evol;
    background: orange;
  }
  /* .species {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30rem;

    .specie {
      flex: 1;
      background-color: ${({ theme }) => theme.colors.gray300};
      color: #000;
      display: grid;
      grid-template-areas:
        'desc desc'
        'ft   lb  ';

      .description {
        grid-area: desc;
        background-color: green;
      }
      .height {
        grid-area: ft;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: ${({ theme }) => theme.fontSize.xs};

        p {
          width: 80%;
          background-color: #fff;
          text-align: center;
          padding: 0.5rem 1rem;
        }
      }
      .weight {
        grid-area: lb;
        background-color: blue;
      }
    }
  }

  .image {
    width: 30rem;
    img {
      width: inherit;
    }
  } */

  @media (max-width: 768px) {
    height: calc(
      100% - ${({ theme }) => theme.components.pokeTitle.mediaHeight}
    );
  }
`;
