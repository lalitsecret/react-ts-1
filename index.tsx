import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './pages/App'
import {Provider} from 'react-redux'
import store from './store/store'
render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
