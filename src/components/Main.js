require('../styles/reset.css')
require('../styles/normalize.css')
require('../styles/App.css')

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from '../containers/Ui/VisibleAppBar'
import Alert from '../containers/Ui/VisibleAlert'
import SiderBar from '../containers/Ui/VisibleSiderBar'

class AppComponent extends React.Component {
  render () {
    const { children } = this.props
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar />
          <Alert />
          <SiderBar />
          {children}
        </div>
      </MuiThemeProvider>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
