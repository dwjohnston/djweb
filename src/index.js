import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import OpenDataModule from './components/modules/opendata';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// Render the main component into the dom
ReactDOM.render(<OpenDataModule />, document.getElementById('app'));
