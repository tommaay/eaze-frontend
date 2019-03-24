import React from 'react';
import { Tabs, Tab, selected } from './tabs-bar.style';

const TabsBar = props => {
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
