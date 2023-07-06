import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: 30%;
  min-width: 20%;
  height: 40%;
  color: #000;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2rem;
  padding: 0.5rem 1rem;

  h3 {
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Courier New', Courier, monospace;
    height: 3rem;
  }

  .abilities {
    display: flex;
    width: 100%;
    height: calc(100% - 3rem);
    gap: 1rem;
  }
`;
