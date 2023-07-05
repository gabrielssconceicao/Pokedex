import { FlavorTextEntries } from '../../../Interfaces/allPokemons';
import { Container } from './styled';

interface DescriptionProps {
  description: FlavorTextEntries[];
  height: number;
  weight: number;
}
export function Description({ description, weight, height }: DescriptionProps) {
  const filteredDesc = description.filter(
    (desc) => desc.language.name === 'en'
  );
  return (
    <Container>
      <div className="desc">
        <h2>Description</h2>
        <p>{filteredDesc[0].flavor_text}</p>
      </div>
      <div className="heightWeight">
        <div className="height">
          <h3>Height</h3>
          <p>{(height / 10).toFixed(2)}m</p>
          <p>
            {((height / 10) * 3.28084).toFixed(2).toString().replace('.', "'")}
            &#34;
          </p>
        </div>
        <div className="weight">
          <h3>Weight</h3>
          <p>{(weight / 10).toFixed(1)}Kg</p>
          <p>{((weight / 10) * 2.20462).toFixed(1)}lb</p>
        </div>
      </div>
    </Container>
  );
}
