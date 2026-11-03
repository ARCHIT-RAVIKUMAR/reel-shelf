export default function Toolbar({ query, onQuery, sort, onSort, onlyFavs, onOnlyFavs }) {
  return (
    <div className="toolbar">
      <input
        type="search"
        placeholder="Search by title or director…"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        aria-label="Search movies"
      />
      <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Sort movies">
        <option value="rating">Top rated</option>
        <option value="year">Newest</option>
        <option value="title">A–Z</option>
      </select>
      <label className="toggle">
        <input type="checkbox" checked={onlyFavs} onChange={(e) => onOnlyFavs(e.target.checked)} />
        Favorites only
      </label>
    </div>
  );
}
