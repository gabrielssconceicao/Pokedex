interface PokemonCardProps {
  title?: string;
  children: React.ReactNode;
}

export function PokemonContainer({ children, title }: PokemonCardProps) {
  return (
    <div className="flex flex-col items-stretch justify-center gap-2 p-2">
      {title && (
        <h2 className="text-md text-center font-sans font-semibold">{title}</h2>
      )}
      <section className="rounded-lg bg-slate-100 px-2 py-1 text-gray-800 shadow-md">
        {children}
      </section>
    </div>
  );
}
