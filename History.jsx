import React from "react";

const History = ({ history, onSearch, onDelete, onClearAll }) => {
  if (!history.length) return null;

  return (
    <div className="history">
      <p>История поиска:</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {history.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button
              style={{
                padding: "6px 12px",
                borderRadius: "12px",
                border: "none",
                background: "#ffcc70",
                cursor: "pointer",
              }}
              onClick={() => onSearch(item)}
            >
              {item}
            </button>
            <button
              style={{
                padding: "0 6px",
                border: "none",
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => onDelete(item)}
              title="Удалить"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "10px",
          padding: "6px 14px",
          borderRadius: "12px",
          border: "none",
          background: "#ff4d4d",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={onClearAll}
      >
        Очистить всё
      </button>
    </div>
  );
};

export default History;

