import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  nav {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      object-fit: contain;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 20rem;
    }
  }
`;
