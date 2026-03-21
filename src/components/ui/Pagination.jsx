export default function Pagination({ current, total }) {
  return (
    <div className="pagination">
      <button className="btn btn-ghost pagination-btn" disabled={current === 1}>
        Prev
      </button>
      <div className="pagination-meta">
        <strong>
          Page {current}
        </strong>
        <span>of {total}</span>
      </div>
      <button className="btn btn-ghost pagination-btn" disabled={current === total}>
        Next
      </button>
    </div>
  );
}
