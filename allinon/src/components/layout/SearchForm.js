import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


let SearchForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field type="text" name="searchValue" placeholder="#travel..." />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form>
}

SearchForm = reduxForm({
    form: 'searchForm'
})(SearchForm)


export default SearchForm;


