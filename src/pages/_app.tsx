import { Montserrat } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import '../styles/global.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      >
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
