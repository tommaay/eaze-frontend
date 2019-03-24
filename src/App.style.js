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
            padding: 1rem;
        }

        @media (max-width: 500px) {
            column-count: 1;
        }
    }
`;
