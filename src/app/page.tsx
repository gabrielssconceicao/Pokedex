import { Filters } from './components/filters';
import { Header } from './components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Filters />
      </main>
    </>
  );
}
