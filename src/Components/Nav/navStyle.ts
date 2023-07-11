import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  height: ${({ theme }) => theme.components.nav.height};
  nav {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      width: 75%;
      object-fit: contain;
    }
  }

  @media (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 20rem;
    }
  }
`;
