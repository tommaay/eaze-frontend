import React from 'react';
import { Tabs, Tab, selected } from './tabs-bar.style';

const TabsBar = props => {
    const { homeSelected, selectHome, selectFavorites } = props;

    return (
        <Tabs>
            <Tab style={homeSelected ? selected : null} onClick={selectHome}>
                Home
            </Tab>
            <Tab
                style={!homeSelected ? selected : null}
                onClick={selectFavorites}
            >
                Favorites
            </Tab>
        </Tabs>
    );
};

export default TabsBar;
