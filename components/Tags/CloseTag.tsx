interface Props {
  tag: string;
}

export default function CloseTag({ tag }: Props) {
  return (
    <>
      <span className="text-gray">&lt;</span>
      <span className="text-gray">/</span>
      <span className="text-blue">{tag}</span>
      <span className="text-gray">&gt;</span>
    </>
  );
}
