'use server';

import { Metadata } from 'next';

import { PageProps } from '../../interface/page-props';
import { getMetadata } from '../../utils/metadata';
import { WeaknessList } from './components/weakness-list';
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return getMetadata({ params, title: 'Weakness' });
}
export default async function Weakness({ params }: PageProps) {
  const { id } = await params;

  return (
    <section>
      <WeaknessList id={id} />
    </section>
  );
}
