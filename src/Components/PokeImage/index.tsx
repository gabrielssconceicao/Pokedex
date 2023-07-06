import { Container } from './styled';

interface PokeImageProps {
  defaultImg: string;
  alternativeImg: string;
  altImg: string;
  bgColor: string;
}

export function PokeImage({
  defaultImg,
  alternativeImg,
  altImg,
  bgColor,
}: PokeImageProps) {
  return (
    <Container bgColor={bgColor}>
      <img src={defaultImg || alternativeImg} alt={altImg} />
    </Container>
  );
}
