import styled from 'styled-components';

export const AppContainer = styled.div`
    min-height: 100vh;
    background: whitesmoke;

    .content {
        column-count: 5;
        padding: 2rem;
        width: 100%;
        max-width: 140rem;
        margin: 0 auto;

        @media (max-width: 1200px) {
            column-count: 4;
        }

        @media (max-width: 1000px) {
            column-count: 3;
        }

        @media (max-width: 800px) {
            column-count: 2;
            padding: 1.5rem;
        }

        @media (max-width: 550px) {
            column-count: 1;
            margin-top: 25rem;
        }
        .gif-wrapper {
            position: relative;
            outline: none;
            box-shadow: 0px 0px 10px gray;
            margin: 0rem 1rem 3rem;
            cursor: pointer;

            &:hover {
                transition: all 0.2s ease;
                transform: scale(1.04);
                box-shadow: 0px 0px 25px gray;
                position: relative;
                z-index: 2;
            }
        }
    }
`;

export const bgFade = {
    position: 'fixed',
    zIndex: 4,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgb(100, 100, 100, 0.95',
};
