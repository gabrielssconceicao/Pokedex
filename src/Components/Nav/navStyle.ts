import styled from 'styled-components';

export const Container = styled.div`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;

    img {
      object-fit: contain;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 200px;
    }
  }
`;
