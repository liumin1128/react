import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class Alert extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {common, onCloseAlert} = this.props
    const actions = [
      <FlatButton
        label="确定"
        primary={true}
        onTouchTap={onCloseAlert}
      />
    ]
    return (
        <Dialog
          actions={actions}
          modal={false}
          open={common.alert.open || false}
          onRequestClose={this.handleClose}
        >
          {common.alert.msg}
        </Dialog>
    )
  }
}

export default CSSModules(Alert, styles, {allowMultiple: true})
