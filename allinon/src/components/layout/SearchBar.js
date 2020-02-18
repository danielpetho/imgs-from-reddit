import React from 'react';
import { Field, reduxForm } from 'redux-form'

let SearchForm = (props) => {
    const {handleSubmit} = props;
    return <form className="searchbar" onSubmit={handleSubmit}>
        <Field type="text" name="searchValue" placeholder="#travel..." />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form >
}

let SearchFormContainer = reduxForm({
    form: 'searchForm'
})(SearchForm)

function SearchBar({ onLog }) {
    return (<form>
        <SearchFormContainer onSubmit={onLog}></SearchFormContainer>
    </form>)
}


export default SearchBar;


