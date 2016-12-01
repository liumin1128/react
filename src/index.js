import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Provider } from 'react-redux'
import store from './stores/store.js'
// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))
