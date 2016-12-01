import { connect } from 'react-redux'
import Test from '../components/Test'
// import {initTest} from '../../actions'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onCloseTest: () => {
    //   dispatch(initTest())
    // }
  }
}

const VisibleTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)

export default VisibleTest
