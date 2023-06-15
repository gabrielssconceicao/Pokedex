import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  font-size: 1.5rem;
  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.darkSecundary};
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .page_index {
  }
`;
