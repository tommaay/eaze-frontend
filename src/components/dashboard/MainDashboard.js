import React from 'react';
import GifCard from '../gif-card/GifCard';

const MainDashBoard = props => {
    return (
        <>
            {props.gifs.map(gif => (
                <GifCard gif={gif} key={gif.id} favorites={props.favorites} />
            ))}
        </>
    );
};

export default MainDashBoard;
