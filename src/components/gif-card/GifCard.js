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
import LoaderImg from './LoaderImg';

// MainDashboard => **GifCard** => GifModal
const GifCard = props => {
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
            <div className="gif-wrapper">
                <GifImage
                    src={gif.images.original.url}
                    width="100%"
                    alt={gif.title}
                    onClick={e => {
                        openGifModal(gif);
                    }}
                    style={
                        displayModal && gif === gifContent
                            ? { outline: '5px solid rgb(255,255,88)' }
                            : null
                    }
                    id={gif.id}
                    loader={<LoaderImg />}
                />
                {/* Check to see if the GIF is included in favorites 
                and display the proper icon if liked or unliked */}
                {favorites.filter(e => e.id.toString() === gif.id.toString())
                    .length === 0 ? (
                    <UnLikedIcon addToFavorites={addToFavorites} gif={gif} />
                ) : (
                    <LikedIcon
                        removeFromFavorites={removeFromFavorites}
                        gif={gif}
                        removeGifModal={removeGifModal}
                    />
                )}
            </div>

            {displayModal && gif === gifContent ? (
                <GifModal
                    gif={gif}
                    removeGifModal={removeGifModal}
                    images={gif.images}
                    title={gif.title}
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
