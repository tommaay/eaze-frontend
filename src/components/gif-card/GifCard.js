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
    } = props;

    return (
        <>
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

            {displayModal && gif === gifContent ? (
                <GifModal
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    gif={gif}
                    removeGifModal={removeGifModal}
                    images={images}
                    title={title}
                    displayModal={displayModal}
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
