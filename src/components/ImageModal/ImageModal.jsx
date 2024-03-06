import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ isOpen, image, onClose }) {
  console.log(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.overlay}
    >
      <div>
        (
        <img
          className={css.container}
          src={image.urls.regular}
          alt={image.alt_description}
          onClick={onClose}
        />
        )
      </div>
    </Modal>
  );
}

export default ImageModal;
