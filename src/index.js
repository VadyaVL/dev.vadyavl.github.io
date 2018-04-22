import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MainPage from './pages/main-page';

import './index.css';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
