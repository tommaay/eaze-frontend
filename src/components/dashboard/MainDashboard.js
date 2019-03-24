import React from 'react';
import GifCard from '../gif-card/GifCard';

const FavoritesDashBoard = props => {
    return (
        <>
            {props.gifs.map(gif => (
                <GifCard gif={gif} key={gif.id} favorites={props.favorites} />
            ))}
        </>
    );
};

export default FavoritesDashBoard;
