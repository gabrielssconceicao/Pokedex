import { JSX } from 'react';

export function formatText(text: string): JSX.Element[] {
  const lineBreakRegex = /\r?\f|\r/g;
  return text.split(lineBreakRegex).map((line) => <p key={line}>{line}</p>);
}
