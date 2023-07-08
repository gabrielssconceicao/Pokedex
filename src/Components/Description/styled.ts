import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.components.pokemonInfo.pokeDescription.height};
  width: ${({ theme }) => theme.components.pokemonInfo.pokeDescription.width};
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .desc {
    width: 100%;
    border-radius: 1.5rem;
    padding: 1rem 0.5rem;
    color: #000;
    background-color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 2rem;
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    p {
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
      text-align: justify;
      line-height: 3rem;
    }
  }

  .heightWeight {
    background-color: ${({ theme }) => theme.colors.gray700};
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: space-evenly;

    .weight,
    .height {
      width: 40%;

      h3 {
        text-align: center;
        font-size: 2rem;
      }

      p {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        text-align: center;
        background: ${({ theme }) => theme.colors.gray900};
        border-radius: 2rem;
        margin: 1rem 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    flex: 1;
    height: fit-content;
  }
`;
