import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
