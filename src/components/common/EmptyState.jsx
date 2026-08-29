export default function EmptyState ({ message = 'No data available', icon = '📭' }){return (
    <div className="empty-state">
      <span className="empty-icon">{icon}</span>
      <p>{message}</p>
    </div>
  );
}
