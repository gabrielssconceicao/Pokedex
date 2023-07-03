import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .title {
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    font-size: 2rem;
    align-items: center;

    display: flex;
    gap: 1rem;

    span {
      text-transform: uppercase;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'Arial',
        sans-serif;
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
  }

  .species {
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
        background-color: pink;
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
      background-color: #fff;
      width: inherit;
    }
  }
`;
