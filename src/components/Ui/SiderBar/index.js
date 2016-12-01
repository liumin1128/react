import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
class SiderBar extends React.Component {
  render () {
    const {common, onCloseSiderBar} = this.props
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={common.siderbar.open}
          onRequestChange={(open) => onCloseSiderBar()}
        >
          <MenuItem onTouchTap={onCloseSiderBar}>Menu Item</MenuItem>
          <MenuItem onTouchTap={onCloseSiderBar}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default CSSModules(SiderBar, styles, {allowMultiple: true})
