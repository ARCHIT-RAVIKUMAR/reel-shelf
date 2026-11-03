# ReelShelf (Movie Explorer)

React app with search, sort, genre filter, favorites (saved in localStorage) and a details modal.

To use real posters, add a `posterUrl` to any movie in `src/data/movies.js`.

Components: `App` → `GenreFilter`, `MovieGrid` → `MovieCard` → (`Poster`, `RatingBadge`), `MovieDetails` → (`Poster`, `RatingBadge`).

## Run
    npm install
    npm run dev      # develop
    npm test         # run tests
    npm run build    # production build in /dist
