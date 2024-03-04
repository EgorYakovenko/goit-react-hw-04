import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallary}>
      <li>
        {items.map(item => (
          <div key={item.id}>
            <ImageCard items={item} onClick={() => onImageClick(item)} />
          </div>
        ))}
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
