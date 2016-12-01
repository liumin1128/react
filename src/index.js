import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Provider } from 'react-redux'
import store from './stores/store.js'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import List from './containers/Ui/VisibleList'
import Index from './containers/VisibleIndex'
import About from './containers/VisibleAbout'
import Test from './containers/VisibleTest'
const triggerEnter = (nextState, replace) => {}
const triggerLeave = (nextState, replace) => {}

document.getElementById('loding').style.display = 'none'

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path="/" component={App}>
                <IndexRoute component={Index} onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/list" component={ List } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/about" component={ About } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/test" component={ Test } onEnter={triggerEnter} onLeave={triggerLeave}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'))
