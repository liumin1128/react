import { connect } from 'react-redux'
import SiderBar from '../../components/Ui/SiderBar'
import {closeSiderBar} from '../../actions'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseSiderBar: () => {
      dispatch(closeSiderBar())
    }
  }
}

const VisibleSiderBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderBar)

export default VisibleSiderBar
