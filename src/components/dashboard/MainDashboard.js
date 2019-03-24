import React from 'react';
import GifCard from '../gif-card/GifCard';

// **MainDashboard** => GifCard => GifModal
const MainDashBoard = props => {
    const { homeSelected, gifs, favorites } = props;

    return (
        <>
            {homeSelected
                ? gifs.map(gif => (
                      <GifCard gif={gif} key={gif.id} favorites={favorites} />
                  ))
                : favorites.length > 0
                ? favorites.map(gif => (
                      <GifCard
                          gif={gif}
                          key={gif.id}
                          favorites={favorites}
                          inFavorites
                      />
                  ))
                : null}
        </>
    );
};

export default MainDashBoard;
