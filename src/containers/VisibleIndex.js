import { connect } from 'react-redux'
import Index from '../components/Index'
// import {initIndex} from '../../actions'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onCloseIndex: () => {
    //   dispatch(initIndex())
    // }
  }
}

const VisibleIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default VisibleIndex
