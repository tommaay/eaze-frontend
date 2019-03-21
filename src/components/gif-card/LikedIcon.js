import React from 'react';

const LikedIcon = props => {
    return (
        <i
            className="fa fa-heart fa-2x heart icon"
            onClick={() => {
                props.removeFromFavorites(props.gif);
                props.gif.favorite = false;
            }}
        />
    );
};
export default LikedIcon;
