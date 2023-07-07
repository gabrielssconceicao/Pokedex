import styled from 'styled-components';

interface ContainerProps {
  statusValueWidth: number;
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  color: #000;
  display: flex;
  margin-bottom: 1rem;

  .statusName {
    min-width: fit-content;
    background-color: #fff;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    font-size: 1.3rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-transform: uppercase;

    background-color: ${(props) => props.bgColor};
    filter: brightness(0.75);
  }

  .statusValue {
    background-color: ${(props) => props.bgColor};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: ${(props) => props.statusValueWidth}%;
    padding: 0.5rem 1rem;
    text-align: end;
    font-size: 1.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
`;
