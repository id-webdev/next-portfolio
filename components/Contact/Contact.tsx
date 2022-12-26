import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="heading">#contact</h2>
        </div>
        <p className={styles.text}>
          Want to get in touch? Use the form below or email me directly:{' '}
          <a href="mailto:ilyuha45@gmail.com">ilyuha45@gmail.com</a>
        </p>
        <form className={styles.form}>
          <div className={styles.formControl}>
            <input type="text" id="full-name" placeholder=" " />
            <label htmlFor="full-name">Full Name</label>
          </div>
          <div className={styles.formControl}>
            <input type="email" id="email" placeholder=" " />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles.formControl}>
            <textarea rows={9} id="message" placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className={styles.formControl}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
