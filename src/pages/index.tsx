import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

export default function Home() {
  const headerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>id-web.dev</title>
        <meta name="description" content="Ilya Dyma's Portfolio Website" />
      </Head>
      <Header ref={headerRef} currentSection={currentSection} />
      <Hero setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <Projects headerRef={headerRef} setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />
      <Footer />
    </>
  );
}
