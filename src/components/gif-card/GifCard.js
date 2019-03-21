import React from 'react';
import styled from 'styled-components';

const GifContainer = styled.div`
    box-shadow: 0px 0px 10px gray;
    margin: 1rem;
    height: 100%;

    img,
    .bottom-label {
        outline: none;
    }

    .bottom-label {
        min-height: 4rem;
        color: #666;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 5rem;

        .icon {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
`;

const GifCard = props => {
    const { images, title } = props.gif;

    return (
        <GifContainer>
            <img src={images.original.url} width="100%" alt={title} />
            <div className="bottom-label">
                <p>{title}</p>
                <i className="fa fa-heart-o fa-2x heart icon" />
            </div>
        </GifContainer>
    );
};

export default GifCard;
