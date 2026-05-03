'use server';

import { PageProps } from '../../interface/page-props';
import { WeaknessList } from './components/weakness-list';

export default async function Weakness({ params }: PageProps) {
  const { id } = await params;

  return (
    <section>
      <WeaknessList id={id} />
    </section>
  );
}
