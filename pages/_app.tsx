import App, { AppProps } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from '../src/styles/global';

export interface AppPropsWithRedux extends AppProps {
  reduxStore?: any;
}

class MyApp extends App {
  persistor: Persistor;
  constructor(props: AppPropsWithRedux) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  render() {
    //@ts-ignore
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}
        >
          <Component {...pageProps} />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
