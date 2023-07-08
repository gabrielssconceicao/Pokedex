import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;

  h1 {
    font-size: 4rem;
    text-shadow: 3px 3px 6px #f00, 6px 6px 6px #00f;
  }
`;

export const Back = styled(Link)`
  width: 10rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  color: #fff;
  background-color: transparent;
  transition: all 300ms;

  &:hover {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
