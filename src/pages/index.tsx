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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
