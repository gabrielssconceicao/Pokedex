import { useState } from 'react';

import { Container } from './inputStyle';
import { usePokemon } from '../../Hook/usePokemon';

export function InputSearch() {
  const [value, setValue] = useState('');
  const { inputSearch } = usePokemon();

  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o nome ou id do pokemon"
      />
      <button type="button" onClick={() => inputSearch(value.toLowerCase())}>
        Procurar
      </button>
    </Container>
  );
}
