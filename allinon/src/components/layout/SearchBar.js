import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


let SearchBar = props => {
    const { onLog } = props
    return <form className="searchbar" onSubmit={onLog}>
        <input type="text" name="searchValue" placeholder="#travel..." />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form >
}

/*SearchBar = reduxForm({
    form: 'searchForm'
})(SearchBar)*/

/*function SearchBar({ onLog }) {
    return (<form>s
        <SearchFormContainer onSubmit={onLog}></SearchFormContainer>
    </form>)
}*/


export default SearchBar;


