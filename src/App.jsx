import { useEffect, useMemo, useState } from "react";
import { movies } from "./data/movies.js";
import MovieGrid from "./components/MovieGrid.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import Toolbar from "./components/Toolbar.jsx";

const sorters = {
  rating: (a, b) => b.rating - a.rating,
  year: (a, b) => b.year - a.year,
  title: (a, b) => a.title.localeCompare(b.title),
};

function loadFavs() {
  try { return JSON.parse(localStorage.getItem("favs")) || []; } catch { return []; }
}

export default function App() {
  const [genre, setGenre] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("rating");
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [favorites, setFavorites] = useState(loadFavs);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    try { localStorage.setItem("favs", JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const toggleFav = (id) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const genres = [...new Set(movies.map((m) => m.genre))];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return movies
      .filter((m) => genre === "All" || m.genre === genre)
      .filter((m) => !onlyFavs || favorites.includes(m.id))
      .filter((m) => !q || m.title.toLowerCase().includes(q) || m.director.toLowerCase().includes(q))
      .sort(sorters[sort]);
  }, [genre, query, sort, onlyFavs, favorites]);

  return (
    <main className="app">
      <header className="masthead">
        <h1>Reel<span>Shelf</span></h1>
        <p className="muted">A small, hand-picked movie shelf · {visible.length} of {movies.length} showing</p>
      </header>
      <Toolbar query={query} onQuery={setQuery} sort={sort} onSort={setSort} onlyFavs={onlyFavs} onOnlyFavs={setOnlyFavs} />
      <GenreFilter genres={genres} value={genre} onChange={setGenre} />
      <MovieGrid movies={visible} onSelect={setSelected} favorites={favorites} onToggleFav={toggleFav} />
      {selected && (
        <MovieDetails movie={selected} onClose={() => setSelected(null)} isFav={favorites.includes(selected.id)} onToggleFav={toggleFav} />
      )}
    </main>
  );
}
