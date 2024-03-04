import { Field, Form, Formik } from 'formik';
import css from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  return (
    <header className={css.headeContainer}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          console.log(values.query);
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
