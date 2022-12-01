interface Props {
  tag: string;
  id?: string;
}

export default function OpenTag({ tag, id }: Props) {
  return (
    <>
      <span className="text-gray">&lt;</span>
      <span className="text-blue">{tag}</span>
      {id && (
        <>
          &nbsp;<span className="text-lightblue">id</span>
          <span className="text-lightgray">=</span>
          <span className="text-salmon">&quot;{id}&quot;</span>
        </>
      )}
      <span className="text-gray">&gt;</span>
    </>
  );
}
