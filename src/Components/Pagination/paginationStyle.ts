import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.fontSize.xs};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.fontSize.base};
  font-size: ${({ theme }) => theme.fontSize.xs};
  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.darkSecundary};
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .page_index {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
