import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  font-family: 'Courier New', Courier, monospace;

  .abilityName {
    font-size: 1.5rem;
    font-weight: bold;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    cursor: pointer;
    &:hover {
      border: 2px solid #000;
    }
  }

  .abilityDesc {
    flex: 1;

    padding: 1rem 0.5rem;

    line-height: 2rem;
    font-size: 1.4rem;

    overflow-y: auto;

    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 2rem;
    transition: height 300ms ease;
  }

  h3 {
    font-size: 2rem;
  }
`;
