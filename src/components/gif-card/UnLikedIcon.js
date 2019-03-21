import React from 'react';

const UnLikedIcon = props => {
    return (
        <i
            className="fa fa-heart-o fa-2x heart icon"
            onClick={() => {
                props.addToFavorites(props.id);
                props.gif.favorite = true;
            }}
        />
    );
};
export default UnLikedIcon;
