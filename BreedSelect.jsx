import { useEffect, useState } from "react";
import { fetchBreeds } from "../api/catApi";

const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds().then(setBreeds);
  }, []);

  return (
    <select className="breed-select" onChange={(e) => onSelect(e.target.value)}>
      <option value="">Все породы</option>

      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default BreedSelect;
