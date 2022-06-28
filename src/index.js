import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "../App";
import './assets/css/main.css';
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);
