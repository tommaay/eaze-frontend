import React from 'react';
import { ContentCard } from './gif-card.style';
import { GifImageModal } from './gif-card.style';

// MainDashboard => GifCard => **GifModal**
const GifModal = props => {
    const { gif, removeGifModal, images, title } = props;

    return (
        <ContentCard>
            {/* Top part of the modal with the close and favorite icons */}
            <div className="modal-top">
                <h4 className="close-icon" onClick={removeGifModal}>
                    X
                </h4>
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
