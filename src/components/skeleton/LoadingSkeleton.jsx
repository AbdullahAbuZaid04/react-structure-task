export default function LoadingSkeleton({ type = "card" }) {
  return (
    <div className={`skeleton skeleton-${type}`}>
      <div className="skeleton-shimmer"></div>
    </div>
  );
}
