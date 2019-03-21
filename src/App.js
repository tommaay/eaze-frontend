import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getTrendingGIFS,
    searchGIFS,
    addToFavorites,
    removeFromFavorites,
} from './store/actions';
import { formatSearch } from './helper/helper';
import styled from 'styled-components';

import SearchBar from './components/searchbar/SearchBar';
import GifCard from './components/gif-card/GifCard';

const AppContainer = styled.div`
    background: rgb(255, 255, 255);
    min-height: 100vh;

    .content {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }
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

                <section className="content">
                    {this.props.gifs.map(gif => (
                        <GifCard
                            gif={gif}
                            key={gif.id}
                            addToFavorites={this.props.addToFavorites}
                            removeFromFavorites={this.props.removeFromFavorites}
                            favorites={this.props.favorites}
                        />
                    ))}
                </section>
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
        favorites: state.favorites,
    };
};

export default connect(
    mapStateToProps,
    { getTrendingGIFS, searchGIFS, addToFavorites, removeFromFavorites }
)(App);
