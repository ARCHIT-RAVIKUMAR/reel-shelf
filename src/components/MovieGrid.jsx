import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies, onSelect, favorites = [], onToggleFav }) {
  if (movies.length === 0) return <p className="empty">No movies found. Try a different search or filter.</p>;
  return (
    <section className="grid" aria-label="Movies">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onSelect={onSelect} isFav={favorites.includes(m.id)} onToggleFav={onToggleFav} />
      ))}
    </section>
  );
}
