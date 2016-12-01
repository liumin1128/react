import { connect } from 'react-redux'
import List from '../../components/Ui/List'
const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onCloseList: () => {
    //   dispatch(initList())
    // }
  }
}

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default VisibleList
