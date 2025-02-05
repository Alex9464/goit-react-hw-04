import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.modalContent}>
          {}
          <img className={styles.modalImage} src={image.urls.regular} alt={image.alt_description} />
          <div className={styles.modalText}>
            <h2 className={styles.imageTitle}>{image.alt_description || "Untitled"}</h2>
            {image.user && (
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src={image.user.profile_image?.medium}
              alt={image.user.name}
            />
            <p className={styles.authorName}>Photo by {image.user.name}</p>
          </div>
        )}
          </div>
        </div>
      )}
    </Modal>
  );
}

