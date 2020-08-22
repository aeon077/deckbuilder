import React from 'react';

import Card from './Card';

const SearchResults = ({ results }) => {
    console.log("Returning Search Results", results)
    return (<div id="results">
        <h3>Here's what we found ({results.length} results):</h3>
        {
            results.map((card, index) => {
                return <Card key={index} {...card} />
            })
        }
    </div>)
};

export default SearchResults;
