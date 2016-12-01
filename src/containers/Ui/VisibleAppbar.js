import { connect } from 'react-redux'
import AppBar from '../../components/Ui/AppBar'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onCloseAppBar: () => {
    //   dispatch(initAppBar())
    // }
  }
}

const VisibleAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)

export default VisibleAppBar
