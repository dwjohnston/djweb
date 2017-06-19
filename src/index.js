import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import D3Module from './components/modules/d3';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// Render the main component into the dom
ReactDOM.render(<D3Module />, document.getElementById('app'));
