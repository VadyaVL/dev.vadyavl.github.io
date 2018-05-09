import * as React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { portfolio } from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainPage from './pages/main';

import './index.scss';

const store = createStore(combineReducers({
    portfolio,
}));

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <MainPage />
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();