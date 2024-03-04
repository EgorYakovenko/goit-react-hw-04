import css from './ImageCard.module.css';

function ImageCard({ items, onClick }) {
  // console.log(items);
  return (
    <div className={css.image} onClick={onClick}>
      <img src={items.urls.small} alt={items.alt_description} />
    </div>
  );
}

export default ImageCard;

// className={css.image}
// return (
//     <>
//       {items.map(item => (
//         <div key={item.id}>
//           <img src={item.urls.small} alt={item.alt_description} />
//         </div>
//       ))}
//     </>
//   );
// }
