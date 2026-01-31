import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import History from "./components/History";

function App() {
  const [search, setSearch] = useState("");     // текст поиска
  const [order, setOrder] = useState("DESC");   // старые/новые
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  // Обновляем историю при новом поиске
  const handleSearch = (query) => {
    setSearch(query);

    if (!query) return;

    setHistory((prev) => {
      const newHistory = prev.includes(query)
        ? prev
        : [query, ...prev].slice(0, 10);
      localStorage.setItem("history", JSON.stringify(newHistory));
      return newHistory;
    });
  };

  // Удаление одного элемента истории
  const handleDelete = (item) => {
    const updated = history.filter((h) => h !== item);
    setHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  };

  // Очистка всей истории
  const handleClearAll = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  return (
    <div className="app">
      <h1>🐱 Cat Gallery</h1>

      {/* Поиск */}
      <SearchBar onSearch={handleSearch} />

      {/* История */}
      <History
        history={history}
        onSearch={handleSearch}
        onDelete={handleDelete}
        onClearAll={handleClearAll}
      />

      {/* Фильтры */}
      <Filters order={order} setOrder={setOrder} />

      {/* Галерея */}
      <Gallery search={search} order={order} />
    </div>
  );
}

export default App;








