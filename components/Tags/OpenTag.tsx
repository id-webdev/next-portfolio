type OpenTagProps = {
  tag: string;
  id?: string;
};

export default function OpenTag({ tag, id }: OpenTagProps) {
  return (
    <>
      <span style={{ color: 'var(--code-fragment)' }}>&lt;</span>
      <span style={{ color: 'var(--code-tag)' }}>{tag}</span>
      {id && (
        <>
          &nbsp;<span style={{ color: 'var(--code-id)' }}>id</span>
          <span style={{ color: 'var(--code-equals)' }}>=</span>
          <span style={{ color: 'var(--salmon)' }}>&quot;{id}&quot;</span>
        </>
      )}
      <span style={{ color: 'var(--code-fragment)' }}>&gt;</span>
    </>
  );
}
