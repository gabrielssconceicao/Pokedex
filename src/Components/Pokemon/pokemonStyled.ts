import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: 26rem;
  background-color: #ccc;

  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  color: #000;

  box-shadow: 5px 5px 5px #000;

  p {
    padding: 0.5rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
  }

  .img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #000;
    img {
      object-fit: contain;
    }
  }

  .types {
    height: 15%;
    padding: 1rem;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    .type {
      border-radius: 1rem;
      border: 2px solid #000;
      box-shadow: 1px 2px 0 #000;
      flex: 1;

      font-size: 1.2rem;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;

      text-align: center;
      padding: 0.2rem;
      color: #fff;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    a {
      width: 50%;
      border-radius: 1.5rem;
      padding: 0.4rem;
      text-align: center;
      font-size: 1.5rem;

      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid #000;
      box-shadow: -2px 3px 0 #000, -4px 6px 0 #000;
      color: #fff;

      &:hover {
        box-shadow: inset -2px 3px 0 #000;
      }
    }
  }

  @media (orientation: landscape) {
    width: 23rem;
    height: 26rem;
  }

  @media (orientation: portrait) {
    width: 26rem;
    height: 25rem;
  }
`;
