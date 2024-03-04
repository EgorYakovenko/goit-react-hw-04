import css from './ImageCard.module.css';

function ImageCard({ items, onClick }) {
  // console.log(items);
  return (
    <div onClick={onClick}>
      <img src={items.urls.small} alt={items.alt_description} />
    </div>
  );
}

export default ImageCard;
