import React from 'react';
import { Field, reduxForm } from 'redux-form'

let SearchForm = (props) => {
    const {handleSubmit} = props;
    return <form className="searchbar" onSubmit={handleSubmit}>
        <Field type="text" name="searchValues" placeholder="art..." component="input" />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form >
}

let SearchFormContainer = reduxForm({
    form: 'searchForm'
})(SearchForm)

function SearchBar({ onSearch }) {
    return (
        <SearchFormContainer onSubmit={onSearch}></SearchFormContainer>
    )
}


export default SearchBar;


