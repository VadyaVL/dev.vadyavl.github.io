// tslint:disable-next-line:no-submodule-imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import MainPage from './pages/main';
import { portfolio } from './reducers';

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
