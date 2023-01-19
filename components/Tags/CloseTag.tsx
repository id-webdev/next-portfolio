type CloseTagProps = {
  tag: string;
};

export default function CloseTag({ tag }: CloseTagProps) {
  return (
    <>
      <span style={{ color: 'var(--neutral-500)' }}>&lt;</span>
      <span style={{ color: 'var(--neutral-500)' }}>/</span>
      <span style={{ color: 'var(--sky-600)' }}>{tag}</span>
      <span style={{ color: 'var(--neutral-500)' }}>&gt;</span>
    </>
  );
}
