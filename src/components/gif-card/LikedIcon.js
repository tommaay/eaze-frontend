import React from 'react';
import { Icon } from './gif-card.style';

const LikedIcon = props => {
    const { removeFromFavorites, gif } = props;

    return (
        <Icon
            className="fa fa-heart fa-2x heart icon"
            style={{ color: 'red' }}
            onClick={() => {
                removeFromFavorites(gif);
                gif.favorite = false;
            }}
        />
    );
};
export default LikedIcon;
