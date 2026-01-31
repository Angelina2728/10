const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.url} alt="cat" />
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Lightbox;
