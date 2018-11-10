import React from 'react';

const Tab = ({match}) => {
    return (
        <div>
            Tab {match.params.id}
        </div>
    );
};

export default Tab;