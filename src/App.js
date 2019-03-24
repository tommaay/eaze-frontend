import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getTrendingGIFS,
    searchGIFS,
    localToFave,
    removeGifModal,
} from './store/actions';
import { formatSearch } from './helper/helper';
import { AppContainer, bgFade } from './App.style';

import SearchBar from './components/searchbar/SearchBar';
import MainDashBoard from './components/dashboard/MainDashboard';
import TabsBar from './components/dashboard/TabsBar';

class App extends Component {
    state = {
        searchInput: '',
        homeSelected: true,
        favoritesSelected: false,
    };

    componentDidMount() {
        this.props.getTrendingGIFS();

        const localFavorites = localStorage.getItem('favorites');
        localFavorites === null
            ? localStorage.setItem(
                  'favorites',
                  JSON.stringify(this.props.favorites)
              )
            : this.props.localToFave();
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: formatSearch(e.target.value) });
    };

    submitHandler = (e, searchInput) => {
        e.preventDefault();
        this.props.searchGIFS(searchInput);
    };

    selectHome = () => {
        this.setState({ homeSelected: true, favoritesSelected: false });
    };

    selectFavorites = () => {
        this.setState({ homeSelected: false, favoritesSelected: true });
    };

    clearSearch = () => {
        this.setState({ searchInput: '' });
        this.props.getTrendingGIFS();
    };

    render() {
        const { gifs, favorites, displayModal, removeGifModal } = this.props;

        return (
            <AppContainer>
                <div
                    style={displayModal ? bgFade : { display: 'none' }}
                    onClick={removeGifModal}
                />

                <SearchBar
                    changeHandler={this.changeHandler}
                    searchInput={this.state.searchInput}
                    searchGIFS={this.submitHandler}
                    clearSearch={this.clearSearch}
                />

                <TabsBar
                    homeSelected={this.state.homeSelected}
                    selectHome={this.selectHome}
                    selectFavorites={this.selectFavorites}
                />

                <section className="content">
                    {/* MainDashboard => GifCard => GifModal */}
                    <MainDashBoard
                        gifs={gifs}
                        favorites={favorites}
                        homeSelected={this.state.homeSelected}
                    />
                </section>
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
        favorites: state.favorites,
        displayModal: state.displayModal,
    };
};

export default connect(
    mapStateToProps,
    {
        getTrendingGIFS,
        searchGIFS,
        localToFave,
        removeGifModal,
    }
)(App);
