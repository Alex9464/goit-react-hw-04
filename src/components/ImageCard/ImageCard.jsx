import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
