import withReduxStore from '../lib/with-redux-store';
import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import GlobalStyle from '../src/styles/global';

export interface AppPropsWithRedux
	extends AppProps {
	reduxStore: any;
}

function MyApp({
	Component,
	pageProps,
	reduxStore
}: AppPropsWithRedux) {
	return (
		<Provider store={reduxStore}>
			<Component {...pageProps} />
			<GlobalStyle />
		</Provider>
	);
}

export default withReduxStore(MyApp);
