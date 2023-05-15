import { useState } from 'react';

import { Container } from './inputStyle';

export function InputSearch() {
  const [value, setValue] = useState('');

  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o nome ou id do pokemon"
      />
      <button type="button">Procurar</button>
    </Container>
  );
}
