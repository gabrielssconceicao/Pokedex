import styled from 'styled-components';

// Adicionar o active class
export const Container = styled.div`
  width: ${({ theme }) => theme.components.pokemonNavDetails.width};
  height: 100vh;

  background-color: #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    height: 100%;
    padding: 1rem;
    ul {
      display: flex;
      flex-direction: column;
      height: inherit;

      justify-content: space-around;
    }
  }

  li {
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        height: ${({ theme }) => theme.fontSize.lg};
        width: ${({ theme }) => theme.fontSize.lg};
        fill: ${({ theme }) => theme.colors.secondary};
      }
      span {
        font-size: ${({ theme }) => theme.fontSize.sm};
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
        color: #fff;
      }

      &.active {
        svg {
          fill: ${({ theme }) => theme.colors.darkPrimary};
        }
        span {
          color: ${({ theme }) => theme.colors.darkSecundary};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    width: ${({ theme }) => theme.components.pokemonNavDetails.mediaWidth};
    height: ${({ theme }) => theme.components.pokemonNavDetails.mediaHeight};
    max-height: fit-content;

    nav {
      height: inherit;
      width: inherit;
      padding: 0;
      ul {
        display: flex;
        flex-direction: row;
        height: inherit;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
`;
