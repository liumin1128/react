import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import image from '../../../images/1.jpg'
const tilesData = [
  {
    img: image,
    title: 'Breakfast',
    author: 'jill111',
    featured: true
  },
  {
    img: image,
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: image,
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img: image,
    title: 'Morning',
    author: 'fancycrave1',
    featured: true
  },
  {
    img: image,
    title: 'Hats',
    author: 'Hans'
  },
  {
    img: image,
    title: 'Honey',
    author: 'fancycravel'
  },
  {
    img: image,
    title: 'Vegetables',
    author: 'jill111'
  },
  {
    img: image,
    title: 'Water plant',
    author: 'BkrmadtyaKarki'
  }
]

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: true}
  }
  render () {
    const {common, onCloseList} = this.props
    return (
      <div styleName='root'>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          styleName='gridList'
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default CSSModules(List, styles, {allowMultiple: true})
