import styled from 'styled-components';
import img from '../../assets/images/eaze_bag.jpg';

export const SearchContainer = styled.div`
    width: 100%;
    padding: 10rem;
    display: flex;
    justify-content: center;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 800px) {
        padding: 8rem 6rem;
    }

    @media (max-width: 600px) {
        padding: 8rem 3rem;
    }

    @media (max-width: 550px) {
        top: 0;
        position: fixed;
        z-index: 3;
    }
`;

export const SearchForm = styled.form`
    width: 80%;
    max-width: 100rem;
    height: 4rem;
    border: none;
    border-radius: 20px;
    display: flex;
    color: white;
    box-shadow: 0 1px 5px black;

    @media (max-width: 800px) {
        width: 100%;
    }

    input {
        width: 80%;
        border: none;
        border-radius: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        outline: none;
        text-align: center;
        opacity: 0.7;

        @media (max-width: 800px) {
            width: 70%;
        }
    }

    button {
        width: 20%;
        border: none;
        border-radius: 20px;
        border-left: 1px solid rgb(0, 170, 231);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        outline: none;
        font-size: 1.6rem;
        color: rgb(0, 170, 231);
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        opacity: 0.7;

        @media (max-width: 800px) {
            width: 30%;
        }

        @media (max-width: 550px) {
            font-size: 1.4rem;
            background: black;
            color: white;
            text-shadow: 0 0 5px gray;
        }

        @media (max-width: 450px) {
            font-size: 1.2rem;
        }

        &:hover {
            background: rgb(0, 170, 231, 0.8);
            color: white;
        }
    }
`;

export const ClearBtn = styled.p`
    padding: 1rem 1.5rem;
    border: 1px solid gray;
    border-radius: 30px;
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    background: rgb(255, 255, 255, 0.7);
    font-size: 1.4rem;
    color: rgb(100, 100, 100);
    box-shadow: 0px 0px 5px black;
    cursor: pointer;

    &:hover {
        background: rgb(255, 255, 255);
        color: orangered;
        box-shadow: 0px 0px 15px black;
        transform: translateX(-50%) translateY(-2px);
    }

    &:active {
        box-shadow: 0px 0px 5px black;
        transform: translateX(-50%) translateY(0);
    }
`;
