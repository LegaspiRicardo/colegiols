import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Levels from './components/Levels';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bg-white">
      <Header />
      <main >
        <Hero />
        <About />
        <Levels />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;