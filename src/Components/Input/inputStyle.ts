import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  input {
    flex: 1;

    max-width: 70%;

    color: #fff;
    background-color: transparent;

    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.tertiary};
    outline: none;
    font-size: 1.6rem;

    &::placeholder {
      font-size: 1.3rem;
    }
  }

  button {
    width: 8rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.darkSecundary};
    font-size: 1.6rem;
  }
`;
