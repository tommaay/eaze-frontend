import React from 'react';
import GifCard from '../gif-card/GifCard';

const FavoritesDashBoard = props => {
    return (
        <>
            {props.favorites.length > 0
                ? props.favorites.map(gif => (
                      <GifCard
                          gif={gif}
                          key={gif.id}
                          removeFromFavorites={props.removeFromFavorites}
                          favorites={props.favorites}
                      />
                  ))
                : null}
        </>
    );
};

export default FavoritesDashBoard;
