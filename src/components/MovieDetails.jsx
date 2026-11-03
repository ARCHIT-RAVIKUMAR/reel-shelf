import { useEffect } from "react";
import Poster from "./Poster.jsx";
import RatingBadge from "./RatingBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";

export default function MovieDetails({ movie, onClose, isFav = false, onToggleFav = () => {} }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <article className="modal" role="dialog" aria-modal="true" aria-label={movie.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close details">✕</button>
        <Poster title={movie.title} hue={movie.hue} posterUrl={movie.posterUrl} size="lg" />
        <div className="modal__info">
          <h2>{movie.title}</h2>
          <p className="muted">{movie.year} · {movie.genre} · {movie.runtime} min</p>
          <RatingBadge rating={movie.rating} />
          <p>{movie.overview}</p>
          <p className="muted">Directed by {movie.director}</p>
          <FavoriteButton active={isFav} onToggle={() => onToggleFav(movie.id)} title={movie.title} />
        </div>
      </article>
    </div>
  );
}
