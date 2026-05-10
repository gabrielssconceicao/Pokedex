import { JSX } from 'react';

export function formatText(text: string | number): JSX.Element[] {
  if (typeof text !== 'string') return [<p key={text}>{text}</p>];
  const lineBreakRegex = /\r?\f|\r/g;
  return text.split(lineBreakRegex).map((line) => <p key={line}>{line}</p>);
}
