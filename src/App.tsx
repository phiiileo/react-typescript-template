import { Global } from '@emotion/react';
import React from 'react';
import { Provider } from 'react-redux';
import { NotificationProvider, ThemeProvider } from './contexts';
import Router from './router';
import getStore from './redux/store';
import globalStyle from './GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = getStore();
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NotificationProvider>
            <Global styles={globalStyle} />
            <Router />
          </NotificationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
