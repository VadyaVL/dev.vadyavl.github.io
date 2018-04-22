import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MainPage from './pages/main';

import './index.scss';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();