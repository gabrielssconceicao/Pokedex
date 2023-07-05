interface PokeImageProps {
  className: string;
  defaultImg: string;
  alternativeImg: string;
  altImg: string;
}
export function PokeImage({
  className,
  defaultImg,
  alternativeImg,
  altImg,
}: PokeImageProps) {
  return (
    <div className={className}>
      <img src={defaultImg || alternativeImg} alt={altImg} />
    </div>
  );
}
