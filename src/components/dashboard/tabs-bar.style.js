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
        margin-top: 15rem;
        background: dodgerblue;
        opacity: 0.9;
        height: 3.5rem;
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
    margin: 0 1rem;

    @media (max-width: 550px) {
        width: 8rem;
        font-size: 1.2rem;
    }
`;

export const selected = {
    borderBottom: '3px solid orangered',
    fontSize: '1.5rem',
};
