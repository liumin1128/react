import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import AppBar from 'material-ui/AppBar'
import { OpenSiderBar } from '../../../actions/common'
// import { OpenSiderBar } from '../actions/common'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton'

function Action () {
  return <IconButton><ActionHome /></IconButton>
}

class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {common} = this.props
    return (
        <div styleName='box'>
          <AppBar
            title={common.appbar.title}
            onTitleTouchTap={common.appbar.titleFunc}
            iconElementLeft={common.appbar.leftIcon}
            onLeftIconButtonTouchTap={common.appbar.leftFunc || OpenSiderBar}
            iconElementRight={common.appbar.rightIcon || Action()}
            onRightIconButtonTouchTap={common.appbar.rightFunc}
          />
        </div>
    )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
