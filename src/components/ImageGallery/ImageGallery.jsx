import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallary}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard items={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
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
