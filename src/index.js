import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from '~/store';

import Routes from '~/routes';

const src = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default src;
