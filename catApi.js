// src/api/catApi.js
import axios from "axios";

const API_KEY = "live_oSQYXmfuUu02zYQug957H12ka7yyqaILBnz1lWs8EpZ7OxVWPCPUcm44ooyTaUQZ";
const BASE_URL = "https://api.thecatapi.com/v1/images/search";

// Получение изображений
export const fetchCats = async (page = 0, limit = 12, order = "DESC", breedId) => {
  const params = {
    limit,
    page,
    order,
  };
  if (breedId) params.breed_ids = breedId; // добавляем только если есть

  const response = await axios.get(BASE_URL, {
    headers: { "x-api-key": API_KEY },
    params,
  });
  return response.data;
};

// Получение списка пород
export const fetchBreeds = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};



