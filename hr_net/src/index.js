import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Routeur from './components/Routeur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routeur/>
    </BrowserRouter>
  </Provider>
);

