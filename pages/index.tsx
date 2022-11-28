import Head from 'next/head';
import Welcome from '../components/Welcome/Welcome';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>id-web.dev</title>
      </Head>
      <Welcome />
    </>
  );
}
