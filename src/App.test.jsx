import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { movies } from "./data/movies.js";

describe("Movie Explorer", () => {
  it("renders a card for every movie", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(movies.length);
  });

  it("passes props down to MovieCard and fires onSelect", async () => {
    const onSelect = vi.fn();
    render(<MovieCard movie={movies[0]} onSelect={onSelect} />);
    expect(screen.getByText("Inception")).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText("View details for Inception"));
    expect(onSelect).toHaveBeenCalledWith(movies[0]);
  });

  it("filters by genre", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: "Animation" }));
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });

  it("searches by title", async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText("Search movies"), "coco");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });

  it("toggles a favorite and filters by favorites", async () => {
    localStorage.clear();
    render(<App />);
    await userEvent.click(screen.getByLabelText("Add Coco to favorites"));
    await userEvent.click(screen.getByLabelText("Favorites only"));
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });

  it("opens and closes the details modal", async () => {
    render(<App />);
    await userEvent.click(screen.getByLabelText("View details for Coco"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText("Close details"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
