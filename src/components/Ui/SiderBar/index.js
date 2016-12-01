import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'

const url = [{
  url: '/',
  text: '首页'
}, {
  url: '/list',
  text: '展示图片'
}, {
  url: '/test',
  text: '功能测试'
}, {
  url: 'about',
  text: '关于'
}]

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
          {
            url.map((item, index) =>
              <Link key={item.url} to={item.url}><MenuItem
                onTouchTap={onCloseSiderBar}
                >{item.text}</MenuItem></Link>
            )
          }
        </Drawer>
      </div>
    )
  }
}

export default CSSModules(SiderBar, styles, {allowMultiple: true})
