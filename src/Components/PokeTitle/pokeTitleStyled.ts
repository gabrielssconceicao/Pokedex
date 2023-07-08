import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  max-height: fit-content;
  height: ${({ theme }) => theme.components.pokeTitle.height};
  padding: 1rem;
  font-size: 2rem;
  align-items: center;

  display: flex;
  gap: 1rem;

  .name {
    display: flex;
    gap: 1rem;
    span {
      text-transform: uppercase;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'Arial',
        sans-serif;
      word-wrap: break-word;
    }
  }

  .types {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;

    .type {
      width: 30%;
      text-align: center;
      padding: 0.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    flex-direction: column;
    height: ${({ theme }) => theme.components.pokeTitle.mediaHeight};
    .types {
      width: 100%;
    }
  }
`;
