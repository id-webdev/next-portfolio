import { FormEvent, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styles from './Contact.module.scss';

type Props = {
  setCurrentSection: (arg0: string) => void;
};

export default function Contact({ setCurrentSection }: Props) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    setButtonDisabled(true);

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      setButtonDisabled(false);

      if (res.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  }

  return (
    <Waypoint onEnter={() => setCurrentSection('contact')} bottomOffset="45%">
      <section className={styles.contact} id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">#contact</h2>
          </div>
          <p className={styles.text}>
            Want to get in touch? Use the form below or email me directly:{' '}
            <a href="mailto:ilyuha45@gmail.com">ilyuha45@gmail.com</a>
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              <input
                type="text"
                id="name"
                placeholder=" "
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.formControl}>
              <input
                type="email"
                id="email"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className={styles.formControl}>
              <textarea
                rows={9}
                id="message"
                placeholder=" "
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className={styles.formControl}>
              <button type="submit" disabled={buttonDisabled}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Waypoint>
  );
}
