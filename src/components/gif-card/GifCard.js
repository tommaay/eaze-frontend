import React from 'react';
import { GifContainer } from './gif-card.style';

import LikedIcon from './LikedIcon';
import UnLikedIcon from './UnLikedIcon';

const GifCard = props => {
    const { images, title, id } = props.gif;

    return (
        <GifContainer>
            <img src={images.original.url} width="100%" alt={title} />
            <div className="bottom-label">
                <p>{title}</p>

                {/* Check to see if the GIF is included in favorites 
                and display the proper icon if liked or unliked */}
                {!props.favorites.includes(id) ? (
                    <UnLikedIcon
                        id={id}
                        addToFavorites={props.addToFavorites}
                        gif={props.gif}
                    />
                ) : (
                    <LikedIcon
                        id={id}
                        removeFromFavorites={props.removeFromFavorites}
                        gif={props.gif}
                    />
                )}
            </div>
        </GifContainer>
    );
};

export default GifCard;
