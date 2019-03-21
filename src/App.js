import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingGIFS, searchGIFS } from './store/actions';
import { formatSearch } from './helper/helper';
import styled from 'styled-components';

import SearchBar from './components/searchbar/SearchBar';

const AppContainer = styled.div`
    background: rgb(20, 20, 20);
    min-height: 100vh;
`;

class App extends Component {
    state = {
        searchInput: '',
    };

    componentDidMount() {
        this.props.getTrendingGIFS();
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: formatSearch(e.target.value) });
    };

    submitHandler = (e, searchInput) => {
        e.preventDefault();
        this.props.searchGIFS(searchInput);
    };

    render() {
        return (
            <AppContainer>
                <SearchBar
                    changeHandler={this.changeHandler}
                    searchInput={this.state.searchInput}
                    searchGIFS={this.submitHandler}
                />

                {this.props.gifs.map(gif => (
                    <img
                        src={gif.images.original.url}
                        width="25%"
                        alt={gif.title}
                        key={gif.id}
                    />
                ))}
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
    };
};

export default connect(
    mapStateToProps,
    { getTrendingGIFS, searchGIFS }
)(App);
