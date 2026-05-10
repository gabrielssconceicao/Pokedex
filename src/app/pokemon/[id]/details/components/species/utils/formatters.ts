export function formatWeight(weight: number) {
  return `${(weight * 0.1).toFixed(1)} kg (${((weight / 10) * 2.20462).toFixed(2)} lbs)`;
}
export function formatHeight(height: number) {
  return `${(height / 10).toFixed(2)} m (${((height / 10) * 3.28084).toFixed(2).toString().replace('.', "'")}")`;
}
