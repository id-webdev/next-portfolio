import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.content}>
        <h1>My name is Ilya Dima</h1>
        <h2>I'm a junior front-end web developer</h2>
      </div>
    </section>
  );
}
