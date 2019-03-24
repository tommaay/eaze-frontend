import React from 'react';
import { Icon } from './gif-card.style';

const LikedIcon = props => {
    return (
        <Icon
            className="fa fa-heart fa-2x heart icon"
            onClick={() => {
                props.removeFromFavorites(props.gif);
                props.gif.favorite = false;
            }}
        />
    );
};
export default LikedIcon;
