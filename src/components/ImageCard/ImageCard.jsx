import styles from './ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  return (
    <li className={styles.card} onClick={() => openModal(image)}>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;