import styles from './Particles.module.scss';

type Props = {
  amount: number;
};

export default function Particles({ amount }: Props) {
  return (
    <div className={styles.particles}>
      {[...Array(amount)].map((e, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}
