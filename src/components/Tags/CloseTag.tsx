type CloseTagProps = {
  tag: string;
};

export default function CloseTag({ tag }: CloseTagProps) {
  return (
    <>
      <span style={{ color: 'var(--code-fragment)' }}>&lt;</span>
      <span style={{ color: 'var(--code-fragment)' }}>/</span>
      <span style={{ color: 'var(--code-tag)' }}>{tag}</span>
      <span style={{ color: 'var(--code-fragment)' }}>&gt;</span>
    </>
  );
}
