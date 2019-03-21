import React from 'react';
import { SearchContainer, SearchForm } from '../searchbar/SearchBar.style';

const SearchBar = props => {
    return (
        <SearchContainer>
            <SearchForm onSubmit={e => props.searchGIFS(e, props.searchInput)}>
                <input
                    type="text"
                    onChange={props.changeHandler}
                    name="searchInput"
                />
                <button>Search</button>
            </SearchForm>
        </SearchContainer>
    );
};

export default SearchBar;
