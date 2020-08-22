import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
    DeckList,
    SearchBar,
    SearchResults
} from './components/index';

const App = () => {
    console.log('rendering APP')
    const [results, setResults] = useState([]);
    return (
        <div id="app">
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
            <DeckList />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);