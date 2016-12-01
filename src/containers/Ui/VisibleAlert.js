import { connect } from 'react-redux'
import Alert from '../../components/Ui/Alert'
import {initAlert} from '../../actions'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseAlert: () => {
      dispatch(initAlert())
    }
  }
}

const VisibleAlert = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)

export default VisibleAlert
