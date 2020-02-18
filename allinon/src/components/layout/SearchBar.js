import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { SearchFormRenderer } from './SearchFormRenderer';

let SearchForm = (props) => {
    const {handleSubmit} = props;
    return <form className="searchbar" onSubmit={handleSubmit}>
        <Field type="text" name="searchValues" placeholder="#travel..." component="input" />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form >
}

let SearchFormContainer = reduxForm({
    form: 'searchForm'
})(SearchForm)

function SearchBar({ onLog }) {
    return (
        <SearchFormContainer onSubmit={onLog}></SearchFormContainer>
    )
}


export default SearchBar;

