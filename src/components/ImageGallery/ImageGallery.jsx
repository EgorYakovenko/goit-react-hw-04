import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ items }) {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard items={items} />
      </li>
    </ul>
  );
}

export default ImageGallery;
