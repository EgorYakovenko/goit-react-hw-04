import { useState, useRef, useEffect } from 'react';

import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import ImageCard from './components/ImageCard/ImageCard';
import fetchImage from './components/api.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // console.log(articles);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImage(searchQuery, page);
        console.log(data);
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        // console.log(error);
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
    setPage(prevPage => prevPage + 1);
    // setPage(page + 1);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />

        {isLoading && <Loader />}

        {error && <ErrorMessage />}

        {articles.length > 0 && <ImageGallery items={articles} />}

        {articles.length > 0 && <LoadMoreBtn moreBtn={handleLoadMore} />}
      </div>
    </>
  );
}

export default App;

//  useEffect(() => {
//    async function fetchImage() {
//      const data = await fetchImage(setImages);
//      setImages(data);
//    }

//    fetchImage();
//  }, []);
