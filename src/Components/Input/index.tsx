import { useState } from 'react';
import { searchPokemon } from '../../api';

export function InputSearch() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    searchPokemon(value).then((pokemon) => console.log(pokemon));
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Procurar
      </button>
    </>
  );
}
