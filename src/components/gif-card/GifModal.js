import React from 'react';
import { ContentCard } from './gif-card.style';
import LikedIcon from './LikedIcon';
import UnLikedIcon from './UnLikedIcon';
import { GifImageModal } from './gif-card.style';

const GifModal = props => {
    const {
        gif,
        addToFavorites,
        removeFromFavorites,
        favorites,
        removeGifModal,
        images,
        title,
        displayModal,
        inFavorites,
    } = props;

    return (
        <ContentCard>
            {/* Top part of the modal with the close and favorite icons */}
            <div className="modal-top">
                <h4 className="close-icon" onClick={removeGifModal}>
                    X
                </h4>

                {/* Check to see if the GIF is included in favorites 
                and display the proper icon if liked or unliked */}
                {!favorites.includes(gif) ? (
                    <UnLikedIcon addToFavorites={addToFavorites} gif={gif} />
                ) : (
                    <LikedIcon
                        removeFromFavorites={removeFromFavorites}
                        gif={gif}
                        removeGifModal={removeGifModal}
                        inFavorites={inFavorites}
                    />
                )}
            </div>

            {/* GIF middle image */}
            <GifImageModal src={images.original.url} width="100%" alt={title} />

            {/* GIF content info on the bottom of the modal */}
            <div className="modal-content-container">
                <div className="modal-content">
                    <h5 className="capitalize">{gif.title}</h5>
                    <p className="capitalize">Rating: {gif.rating}</p>
                </div>
            </div>
        </ContentCard>
    );
};

export default GifModal;
