// src/pages/Home.tsx
import Hero from '../components/homeComponents/Hero';
import About from '../components/homeComponents/About';
import Levels from '../components/homeComponents/Levels';
import Gallery from '../components/homeComponents/Gallery';
import Contact from '../components/homeComponents/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Levels />
      <Gallery />
      <Contact />
    </main>
  );
}

export default Home;