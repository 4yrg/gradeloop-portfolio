import Header from './components/Header';
import Scope from './components/Scope';
import Milestone from './components/Milestone';
import Downloads from './components/Download';

export default function Home() {
  return (
    <main>
      <Header />
      <Scope />
      <Milestone />
      <Downloads />
    </main>
  );
}
