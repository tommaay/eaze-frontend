import styled from 'styled-components';

export const Tabs = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5rem;
    background: rgb(0, 170, 231, 0.5);

    @media (max-width: 550px) {
        position: fixed;
        z-index: 3;
        top: 0;
        margin-top: 20rem;
        background: dodgerblue;
        opacity: 0.9;
    }
`;

export const Tab = styled.div`
    width: 15rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.4rem;
    text-shadow: 0px 0px 3px black;
`;

export const selected = {
    borderBottom: '3px solid orangered',
    fontSize: '1.5rem',
};