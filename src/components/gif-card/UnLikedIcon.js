import React from 'react';
import { Icon } from './gif-card.style';

const UnLikedIcon = props => {
    return (
        <Icon
            className="fa fa-heart fa-2x heart icon"
            onClick={() => {
                props.addToFavorites(props.gif);
                props.gif.favorite = true;
            }}
        />
    );
};
export default UnLikedIcon;
