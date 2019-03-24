import React from 'react';
import { connect } from 'react-redux';
import {
    openGifModal,
    removeGifModal,
    addToFavorites,
    removeFromFavorites,
} from '../../store/actions';
import GifModal from './GifModal';
import { GifImage } from './gif-card.style';
import LikedIcon from './LikedIcon';
import UnLikedIcon from './UnLikedIcon';

// MainDashboard => **GifCard** => GifModal
const GifCard = props => {
    const { images, title } = props.gif;
    const {
        gif,
        favorites,
        addToFavorites,
        removeFromFavorites,
        removeGifModal,
        openGifModal,
        displayModal,
        gifContent,
        inFavorites,
    } = props;

    return (
        <>
            <div className="gif-wrapper">
                <GifImage
                    src={images.original.url}
                    width="100%"
                    alt={title}
                    onClick={() => openGifModal(gif)}
                    style={
                        displayModal && gif === gifContent
                            ? { outline: '5px solid rgb(255,255,88)' }
                            : null
                    }
                />

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

            {displayModal && gif === gifContent ? (
                <GifModal
                    gif={gif}
                    removeGifModal={removeGifModal}
                    images={images}
                    title={title}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        displayModal: state.displayModal,
        gifContent: state.gifContent,
    };
};

export default connect(
    mapStateToProps,
    { openGifModal, removeGifModal, addToFavorites, removeFromFavorites }
)(GifCard);
