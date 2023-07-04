import { PokemonTypes, PokemonTypesColors } from '../../Interfaces/allPokemons';
import { Container } from './pokeTitleStyled';

interface PokeTitleProps {
  name: string;
  id: number;
  types: PokemonTypes[];
}
export function PokeTitle({ name, id, types }: PokeTitleProps) {
  return (
    <Container>
      <div className="name">
        <span> Nº{id.toString().padStart(4, '0')}</span>
        <span>{name}</span>
      </div>

      <div className="types">
        {types.map((type) => (
          <div
            key={type.type.name}
            className="type"
            style={{ background: PokemonTypesColors[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </Container>
  );
}
