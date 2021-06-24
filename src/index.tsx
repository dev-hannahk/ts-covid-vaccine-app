import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import store from './redux/store';
import GlobalStyles from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
