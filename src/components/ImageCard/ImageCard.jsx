function ImageCard({ items, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={items.urls.small} alt={items.alt_description} />
    </div>
  );
}

export default ImageCard;
