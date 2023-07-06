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
    <Container style={{ background: bgColor }}>
      <img src={defaultImg || alternativeImg} alt={altImg} />
    </Container>
  );
}
