import { useState } from 'react';

import { Container } from './inputStyle';
import { usePokemon } from '../../Hook/usePokemon';

export function InputSearch() {
  const [value, setValue] = useState('');
  const { inputSearch } = usePokemon();

  const checkValue = () => {
    if (!value) inputSearch(value.toLowerCase(), true);
  };
  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o nome ou id do pokemon"
        onBlur={checkValue}
      />
      <button type="button" onClick={() => inputSearch(value.toLowerCase())}>
        Procurar
      </button>
    </Container>
  );
}
