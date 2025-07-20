import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Music from '../components/Music';
import Tour from '../components/Tour';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Music />
      <Tour />
      <Contact />
      <Footer />
    </main>
  );
}
