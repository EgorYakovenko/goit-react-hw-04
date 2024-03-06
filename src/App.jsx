import React from 'react';

import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import fetchImage from './components/api.js';

Modal.setAppElement('#root');

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImage(searchQuery, page);

        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  const handleSearch = async newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />

        {isLoading && <Loader />}

        {error && <ErrorMessage />}

        {articles.length > 0 && (
          <ImageGallery items={articles} onImageClick={openModal} />
        )}

        {articles.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}

        {selectedImage && (
          <ImageModal
            isOpen={modalIsOpen}
            image={selectedImage}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
