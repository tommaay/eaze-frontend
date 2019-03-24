import styled from 'styled-components';

export const AppContainer = styled.div`
    min-height: 100vh;
    background: whitesmoke;

    .content {
        column-count: 5;
        padding: 1rem 2rem;
        width: 100%;

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
