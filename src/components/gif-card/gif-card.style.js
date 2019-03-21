import styled from 'styled-components';

export const GifContainer = styled.div`
    box-shadow: 0px 0px 10px gray;
    margin: 0.8rem;
    height: min-content;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.04);
        box-shadow: 0px 0px 25px gray;
        position: relative;
        z-index: 2;
    }

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
        padding: 1rem 4rem;
        background: white;
        margin-top: -3px;

        p {
            font-weight: 100;
            text-transform: capitalize;
            text-align: center;
        }

        .icon {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            cursor: pointer;
            color: red;
            font-size: 22px;
        }
    }
`;
