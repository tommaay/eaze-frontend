import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingGIFS, searchGIFS } from './store/actions';
import { formatSearch } from './helper/helper';
import { AppContainer, bgFade } from './App.style';

import SearchBar from './components/searchbar/SearchBar';
import FavoritesDashBoard from './components/dashboard/FavoritesDashBoard';
import MainDashBoard from './components/dashboard/MainDashboard';
import TabsBar from './components/dashboard/TabsBar';

class App extends Component {
    state = {
        searchInput: '',
        home: true,
        favorites: false,
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

    selectHome = () => {
        this.setState({ home: true, favorites: false });
    };

    selectFavorites = () => {
        this.setState({ home: false, favorites: true });
    };

    handleBlur = () => {
        this.props.removeGifModal();
    };

    clearSearch = () => {
        this.props.getTrendingGIFS();
    };

    render() {
        const { gifs, favorites, displayModal } = this.props;

        return (
            <AppContainer>
                <div style={displayModal ? bgFade : { display: 'none' }} />

                <SearchBar
                    changeHandler={this.changeHandler}
                    searchInput={this.state.searchInput}
                    searchGIFS={this.submitHandler}
                    clearSearch={this.clearSearch}
                />

                <TabsBar
                    home={this.state.home}
                    selectHome={this.selectHome}
                    selectFavorites={this.selectFavorites}
                />

                <section className="content">
                    {/* Display the home dashboard or favorites 
                    depending on the selected tab */}
                    {this.state.home ? (
                        <MainDashBoard gifs={gifs} favorites={favorites} />
                    ) : (
                        <FavoritesDashBoard favorites={favorites} />
                    )}
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
    }
)(App);
