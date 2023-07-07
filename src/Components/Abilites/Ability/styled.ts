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
  }

  .abilityDesc {
    font-size: 1.5rem;
    overflow-y: auto;
    width: 85%;

    &::-webkit-scrollbar-thumb {
      background-color: #333;
    }

    /* Estiliza a área da barra de rolagem onde o thumb não está presente */
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar {
      border-top-right-radius: 20rem;
      border-bottom-right-radius: 20rem;
    }
  }

  h3 {
    font-size: 2rem;
    font-size: 1.4rem;
  }

  .abilityDesc,
  h3 {
    padding: 1rem 1.5rem;
    line-height: 2.5rem;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 2rem;
    box-shadow: 3px 2px 3px #000;
  }
`;
