import { Waypoint } from 'react-waypoint';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Contact.module.scss';

type ContactProps = {
  setCurrentSection: (arg0: string) => void;
};

export default function Contact({ setCurrentSection }: ContactProps) {
  return (
    <Waypoint onEnter={() => setCurrentSection('contact')} bottomOffset="45%">
      <section className={styles.contact} id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">#contact</h2>
          </div>
          <p className={styles.text}>
            Want to get in touch?
            <br />
            Use the form below or email me directly:{' '}
            <a
              href="mailto:ilyuha45@gmail.com"
              aria-label="Link to Ilya's e-mail"
            >
              ilyuha45@gmail.com
            </a>
          </p>
          <ContactForm />
          <p className={styles.recaptchaNotice}>
            This site is protected by reCAPTCHA and the Google{' '}
            <a
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
              aria-label="Link to Google's Privacy Policy"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/terms"
              rel="noreferrer"
              target="_blank"
              aria-label="Link to Google's Terms of Service"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </section>
    </Waypoint>
  );
}
