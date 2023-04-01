import React from 'react';
import ReactDOM from 'react-dom';
// import { setConfig } from 'react-hot-loader';

import ReactGA from 'react-ga4';

import App from './App';

// setConfig({
//   reloadHooks: false,
// });

ReactGA.initialize('UA-138749706-1');

ReactDOM.render(<App />, document.getElementById('root'));
