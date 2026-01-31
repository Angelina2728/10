import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(value.trim().toLowerCase());
  };

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Введите породу (например: siamese)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>🔍 Поиск</button>
    </form>
  );
};

export default SearchBar;

