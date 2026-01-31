const Filters = ({ order, setOrder }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <button
        style={{
          marginRight: "10px",
          background: order === "ASC" ? "#ffcc70" : "#eee",
          padding: "6px 12px",
          borderRadius: "6px",
        }}
        onClick={() => setOrder("ASC")}
      >
        Старые
      </button>
      <button
        style={{
          background: order === "DESC" ? "#ffcc70" : "#eee",
          padding: "6px 12px",
          borderRadius: "6px",
        }}
        onClick={() => setOrder("DESC")}
      >
        Новые
      </button>
    </div>
  );
};

export default Filters;


