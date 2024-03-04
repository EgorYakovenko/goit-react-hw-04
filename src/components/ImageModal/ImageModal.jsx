import Modal from 'react-modal';
import css from './ImageModal.module.css';
function ImageModal({ isOpen, image, onClose }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
      className={css.overlay}
      overlayClassName="overlay"
      //   className="modal"
    >
      <div>
        {image && (
          <img
            className={css.container}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
