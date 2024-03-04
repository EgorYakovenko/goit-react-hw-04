import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.imageGallery}>
      <li className={css.imageGalleryItem}>
        {items.map(item => (
          <div key={item.id}>
            <ImageCard items={item} onClick={() => onImageClick(item)} />
          </div>
        ))}
        {/* <ImageCard items={items} /> */}
      </li>
    </ul>
  );
}

export default ImageGallery;

// className={css.list}
//   return (
//     <ul>
//       {/* Набір елементів списку із зображеннями */}
//       <li>
//         <ImageCard items={items} />
//       </li>
//     </ul>
//   );
// }
