import React from 'react';
import { Icon } from './gif-card.style';

const LikedIcon = props => {
    const { removeFromFavorites, gif, inFavorites, removeGifModal } = props;

    return (
        <Icon
            className="fa fa-heart fa-2x heart icon"
            onClick={() => {
                removeFromFavorites(gif);
                gif.favorite = false;
                if (inFavorites) removeGifModal(); // will close the modal when unfavorited in the favorites dashboard
            }}
        />
    );
};
export default LikedIcon;
