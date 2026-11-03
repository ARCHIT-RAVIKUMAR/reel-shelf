import Poster from "./Poster.jsx";
import RatingBadge from "./RatingBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";

export default function MovieCard({ movie, onSelect, isFav = false, onToggleFav = () => {} }) {
  return (
    <div className="card">
      <button className="card__main" onClick={() => onSelect(movie)} aria-label={`View details for ${movie.title}`}>
        <Poster title={movie.title} hue={movie.hue} posterUrl={movie.posterUrl} />
        <div className="card__body">
          <h3>{movie.title}</h3>
          <p className="muted">{movie.year} · {movie.genre}</p>
          <RatingBadge rating={movie.rating} />
        </div>
      </button>
      <FavoriteButton active={isFav} onToggle={() => onToggleFav(movie.id)} title={movie.title} />
    </div>
  );
}
