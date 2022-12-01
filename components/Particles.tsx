interface ParticlesProps {
  amount: number;
}

export default function Particles({ amount }: ParticlesProps) {
  return (
    <div className="particles">
      {[...Array(amount)].map((e, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}
