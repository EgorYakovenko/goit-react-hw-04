import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ handleLoadMore }) {
  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
