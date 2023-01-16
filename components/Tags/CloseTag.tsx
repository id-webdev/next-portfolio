import styles from './Tags.module.scss';

type CloseTagProps = {
  tag: string;
};

export default function CloseTag({ tag }: CloseTagProps) {
  return (
    <>
      <span className={styles.gray}>&lt;</span>
      <span className={styles.gray}>/</span>
      <span className={styles.blue}>{tag}</span>
      <span className={styles.gray}>&gt;</span>
    </>
  );
}
