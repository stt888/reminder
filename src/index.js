import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reminders from './reducers'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    reminders,
    composeWithDevTools(applyMiddleware(logger))
)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
