import React from 'react';
import { Provider } from 'react-redux'


import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

import { ApolloProvider } from '@apollo/client';
import client from './apollo/config';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <AppRouter />
            </ApolloProvider>
        </Provider>
    )
}
