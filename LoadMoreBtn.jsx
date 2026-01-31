const LoadMoreBtn = ({ onClick, loading }) => {
  return (
    <button className="load-more" onClick={onClick} disabled={loading}>
      {loading ? "Загрузка..." : "Загрузить ещё"}
    </button>
  );
};

export default LoadMoreBtn;

