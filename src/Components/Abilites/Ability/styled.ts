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

    width: ${({ theme }) =>
      theme.components.pokemonInfo.pokeAbilities.ability.abitilyNameWidth};
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    box-shadow: 3px 2px 3px #000;
  }

  .abilityDesc {
    font-size: 1.5rem;
    width: ${({ theme }) =>
      theme.components.pokemonInfo.pokeAbilities.ability.abitilyDescWidth};
  }

  h3 {
    font-size: 2rem;
    font-size: 1.4rem;
  }

  .abilityDesc,
  h3 {
    padding: 1rem 1.5rem;
    line-height: 3.5rem;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 2rem;
    box-shadow: 3px 2px 3px #000;
  }
`;
