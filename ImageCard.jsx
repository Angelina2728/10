const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={() => onClick(image)}>
      <img src={image.url} alt="cat" />
    </div>
  );
};

export default ImageCard;
