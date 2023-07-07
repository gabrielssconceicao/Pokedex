import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 35%;
  color: #000;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  align-self: center;

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
    padding: 0.5rem 1rem;
    text-align: justify;
  }
`;
