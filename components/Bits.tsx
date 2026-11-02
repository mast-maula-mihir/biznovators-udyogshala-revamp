export function List({ items }: { items: readonly string[] }) {
  return (
    <ul>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Paras({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </>
  );
}
