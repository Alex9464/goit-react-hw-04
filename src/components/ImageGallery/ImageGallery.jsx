import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className={styles.imageGallery}>
      {images.map((image) => (
        <div key={image.id} className={styles.imageItem} onClick={() => openModal(image)}>
          <img src={image.urls.small} alt={image.alt_description} />
          <div className={styles.imageDescription}>
            <h3 className={styles.imageTitle}>{image.alt_description || 'Untitled'}</h3>
            <p>{image.description || 'No description available'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;