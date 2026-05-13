'use server';

import { Metadata } from 'next';

import { PageProps } from '../../interface/page-props';
import { getMetadata } from '../../utils/metadata';
import { MoveClient } from './components/move-client';
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return getMetadata({ params, title: 'Moves' });
}
export default async function Moves({ params }: PageProps) {
  const { id } = await params;

  return <MoveClient id={id} />;
}
