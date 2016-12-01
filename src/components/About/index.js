import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'

class Index extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    return (
        <div>
          <h1>关于</h1>
        </div>
    )
  }
}

export default CSSModules(Index, styles, {allowMultiple: true})
