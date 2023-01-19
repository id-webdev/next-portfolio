type OpenTagProps = {
  tag: string;
  id?: string;
};

export default function OpenTag({ tag, id }: OpenTagProps) {
  return (
    <>
      <span style={{ color: 'var(--neutral-500)' }}>&lt;</span>
      <span style={{ color: 'var(--sky-600)' }}>{tag}</span>
      {id && (
        <>
          &nbsp;<span style={{ color: 'var(--blue-200)' }}>id</span>
          <span style={{ color: 'var(--neutral-300)' }}>=</span>
          <span style={{ color: 'var(--salmon)' }}>&quot;{id}&quot;</span>
        </>
      )}
      <span style={{ color: 'var(--neutral-500)' }}>&gt;</span>
    </>
  );
}
