import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root-cmp.jsx';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>

)
