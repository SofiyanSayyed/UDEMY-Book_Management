import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
import {Provider} from './context/books'

const elem = document.getElementById('root');
const root = ReactDom.createRoot(elem);

root.render(
    <Provider>
        <App />
    </Provider>
);