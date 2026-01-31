import { useEffect, useState } from "react";
import { fetchCats, fetchBreeds } from "../api/catApi";
import Lightbox from "./Lightbox";

const Gallery = ({ search, order }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [breedId, setBreedId] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Вычисляем breedId по search
  useEffect(() => {
    if (!search) {
      setBreedId("");
      setNotFound(false);
      setPage(0);
      setImages([]);
      return;
    }

    fetchBreeds().then((breeds) => {
      const found = breeds.find((b) =>
        b.name.toLowerCase().includes(search.toLowerCase())
      );
      if (found) {
        setBreedId(found.id);
        setNotFound(false);
        setImages([]);
        setPage(0);
      } else {
        setBreedId("");
        setNotFound(true);
        setImages([]);
      }
    });
  }, [search]);

  // Загружаем картинки при изменении page, breedId или order
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const data = await fetchCats(page, 12, order, breedId || undefined);

        // Если page = 0 (новый поиск или смена order), заменяем массив
        if (page === 0) setImages(data);
        else setImages((prev) => [...prev, ...data]);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [page, breedId, order]);

  // Сбрасываем страницу при смене order
  useEffect(() => {
    setPage(0);
  }, [order, breedId, search]);

  return (
    <>
      {notFound ? (
        <p style={{ color: "#ff4d4d", fontSize: "18px", marginTop: "20px" }}>
          Нет такой породы: "{search}"
        </p>
      ) : (
        <>
          <div className="gallery">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt="cat"
                onClick={() => setSelectedImg(img.url)}
              />
            ))}
          </div>

          {images.length > 0 && (
            <button
              className="load-more"
              onClick={() => setPage((p) => p + 1)}
              disabled={loading}
            >
              {loading ? "Загрузка..." : "Загрузить ещё"}
            </button>
          )}
        </>
      )}

      {selectedImg && (
        <Lightbox image={selectedImg} onClose={() => setSelectedImg(null)} />
      )}
    </>
  );
};

export default Gallery;
