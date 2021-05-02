import React from 'react';
import { Provider } from 'react-redux';

import store from './Store';
import Navigation from './Navigation'

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}
