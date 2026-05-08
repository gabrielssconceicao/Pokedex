'use server';

import { PageProps } from '../../interface/page-props';
import { MoveClient } from './components/move-client';

export default async function Moves({ params }: PageProps) {
  const { id } = await params;

  return <MoveClient id={id} />;
}
