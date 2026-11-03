export default function GenreFilter({ genres, value, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter by genre">
      {["All", ...genres].map((g) => (
        <button key={g} className={`chip ${value === g ? "chip--active" : ""}`} onClick={() => onChange(g)}>
          {g}
        </button>
      ))}
    </div>
  );
}
