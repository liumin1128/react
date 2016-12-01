require('../styles/normalize.css')
// require('styles/App.css')

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from '../containers/Ui/VisibleAppBar'
import List from '../containers/Ui/VisibleList'
import Alert from '../containers/Ui/VisibleAlert'
import SiderBar from '../containers/Ui/VisibleSiderBar'
import { OpenSiderBar } from '../actions/common'
OpenSiderBar()
class AppComponent extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className="index">
          <AppBar />
          <Alert />
          <SiderBar />
          <List />
        </div>
      </MuiThemeProvider>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
