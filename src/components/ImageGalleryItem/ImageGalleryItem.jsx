const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
  showmodal,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={id}
        onClick={() => showmodal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
