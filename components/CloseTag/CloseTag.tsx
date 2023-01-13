type CloseTagProps = {
  tag: string;
};

export default function CloseTag({ tag }: CloseTagProps) {
  return (
    <>
      <span className="text-gray">&lt;</span>
      <span className="text-gray">/</span>
      <span className="text-blue">{tag}</span>
      <span className="text-gray">&gt;</span>
    </>
  );
}
