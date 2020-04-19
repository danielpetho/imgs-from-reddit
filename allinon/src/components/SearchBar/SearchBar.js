import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import "./styles.css"

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

let SearchForm = (props) => {
    const {handleSubmit} = props;
    return <form className="searchbar" onSubmit={handleSubmit}>
        <Field validate={[required]} type="text" name="searchValues" placeholder="minimalist_art..." component="input"/>
          <Field className="nodisplayfetchBy"
            name="sortposts"
            component="input"
            type="text"
          />
        <button type="submit"><i className="material-icons md-18">search</i></button>
    </form >
}

let SearchFormContainer = reduxForm({
    form: 'searchForm',
    enableReinitialize : true
})(SearchForm)

SearchFormContainer = connect(
    state => ({
        initialValues: state.settingsState // pull initial values from account reducer
      })
)(SearchFormContainer)

function SearchBar({ onSearch, fetchBy}) {
    return (
        <SearchFormContainer onSubmit={onSearch} fetchBy={fetchBy}></SearchFormContainer>
    )
}


export default SearchBar;


