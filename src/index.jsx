import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { portfolio } from './reducers'

import MainPage from './pages/main';

import './index.scss';

const store = createStore(combineReducers({
    portfolio,
}));

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();