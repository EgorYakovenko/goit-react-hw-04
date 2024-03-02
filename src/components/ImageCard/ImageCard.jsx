function ImageCard({ items }) {
  // console.log(items);
  return (
    <>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.urls.small} alt={item.alt_description} />
        </div>
      ))}
    </>
  );
}

export default ImageCard;
