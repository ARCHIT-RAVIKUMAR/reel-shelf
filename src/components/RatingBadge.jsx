export default function RatingBadge({ rating }) {
  return <span className="rating" title="Rating">⭐ {rating.toFixed(1)}</span>;
}
