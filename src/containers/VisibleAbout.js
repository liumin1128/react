import { connect } from 'react-redux'
import About from '../components/About'
// import {initAbout} from '../../actions'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onCloseAbout: () => {
    //   dispatch(initAbout())
    // }
  }
}

const VisibleAbout = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default VisibleAbout
