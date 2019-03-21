import React from 'react';
import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5rem;
    background: rgb(75, 83, 92, 0.3);
`;

const Tab = styled.div`
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

const selected = {
    borderBottom: '4px solid rgb(0, 170, 231)',
    fontSize: '1.5rem',
};

const TabsBar = props => {
    console.log('props.home', props.home);
    return (
        <Tabs>
            <Tab
                style={props.home ? selected : null}
                onClick={props.selectHome}
            >
                Home
            </Tab>
            <Tab
                style={!props.home ? selected : null}
                onClick={props.selectFavorites}
            >
                Favorites
            </Tab>
        </Tabs>
    );
};

export default TabsBar;
