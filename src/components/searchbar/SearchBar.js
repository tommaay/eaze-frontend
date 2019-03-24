import React from 'react';
import {
    SearchContainer,
    SearchForm,
    ClearBtn,
} from '../searchbar/SearchBar.style';

const SearchBar = props => {
    const { clearSearch, searchGIFS, changeHandler, searchInput } = props;

    return (
        <SearchContainer>
            <SearchForm onSubmit={e => searchGIFS(e, searchInput)}>
                <input
                    type="text"
                    onChange={changeHandler}
                    name="searchInput"
                    required
                />
                <button>Search</button>
            </SearchForm>

            <ClearBtn onClick={clearSearch}>Clear Search</ClearBtn>
        </SearchContainer>
    );
};

export default SearchBar;
