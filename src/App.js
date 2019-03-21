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
import FavoritesDashBoard from './components/dashboard/FavoritesDashBoard';
import MainDashBoard from './components/dashboard/MainDashboard';
import TabsBar from './components/dashboard/TabsBar';

const AppContainer = styled.div`
    min-height: 100vh;
    background: whitesmoke;

    .content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
`;

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

    render() {
        const {
            gifs,
            favorites,
            addToFavorites,
            removeFromFavorites,
        } = this.props;

        return (
            <AppContainer>
                <SearchBar
                    changeHandler={this.changeHandler}
                    searchInput={this.state.searchInput}
                    searchGIFS={this.submitHandler}
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
                        <MainDashBoard
                            gifs={gifs}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            favorites={favorites}
                        />
                    ) : (
                        <FavoritesDashBoard
                            favorites={favorites}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                        />
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
    };
};

export default connect(
    mapStateToProps,
    {
        getTrendingGIFS,
        searchGIFS,
        addToFavorites,
        removeFromFavorites,
    }
)(App);
