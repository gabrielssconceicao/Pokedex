import { useState } from 'react';
import { searchPokemon } from '../../api';
import { Container } from './inputStyle';

export function InputSearch() {
  const [value, setValue] = useState('');

  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button">Procurar</button>
    </Container>
  );
}
