import styles from './Tags.module.scss';

type OpenTagProps = {
  tag: string;
  id?: string;
};

export default function OpenTag({ tag, id }: OpenTagProps) {
  return (
    <>
      <span className={styles.gray}>&lt;</span>
      <span className={styles.blue}>{tag}</span>
      {id && (
        <>
          &nbsp;<span className={styles.lightblue}>id</span>
          <span className={styles.lightgray}>=</span>
          <span className={styles.salmon}>&quot;{id}&quot;</span>
        </>
      )}
      <span className={styles.gray}>&gt;</span>
    </>
  );
}
