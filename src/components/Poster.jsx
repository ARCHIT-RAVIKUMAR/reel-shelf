// Uses a real image when `posterUrl` exists, else a generated gradient.
export default function Poster({ title, hue, posterUrl, size = "md" }) {
  if (posterUrl) {
    return <img className={`poster poster--${size}`} src={posterUrl} alt={`${title} poster`} loading="lazy" />;
  }
  return (
    <div
      className={`poster poster--${size}`}
      style={{ background: `linear-gradient(160deg, hsl(${hue} 65% 52%), hsl(${(hue + 40) % 360} 60% 22%))` }}
      role="img"
      aria-label={`${title} poster`}
    >
      <span>{title}</span>
    </div>
  );
}
