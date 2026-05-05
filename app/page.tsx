import Header from './components/Header';
import Scope from './components/Scope';
import Milestone from './components/Milestone';
import Downloads from './components/Download';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Header />
      <Scope />
      <Milestone />
      <Downloads />
      <Achievements />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
