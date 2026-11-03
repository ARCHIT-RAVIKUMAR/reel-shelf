export default function FavoriteButton({ active, onToggle, title }) {
  return (
    <button
      className={`fav ${active ? "fav--on" : ""}`}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      aria-pressed={active}
      aria-label={`${active ? "Remove" : "Add"} ${title} ${active ? "from" : "to"} favorites`}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}
