// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';

import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from './store';

export default function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
