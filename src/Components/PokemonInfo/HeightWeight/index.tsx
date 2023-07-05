interface HeightWeightProps {
  className: string;
  heightWeight: number;
  measure: string;
}
export function HeightWeight({
  className,
  heightWeight,
  measure,
}: HeightWeightProps) {
  return (
    <div className={className}>
      <p>Height:</p>
      <span>
        {(heightWeight / 10).toFixed(2)}
        {measure}
      </span>
    </div>
  );
}
