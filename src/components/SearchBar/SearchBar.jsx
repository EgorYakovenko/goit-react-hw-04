import { Field, Form, Formik } from 'formik';

function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          console.log(values.query);
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
