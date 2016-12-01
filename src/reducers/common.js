import merge from 'lodash/merge'

const initState = () => {
  return {
    alert: {
      open: false,
      msg: ''
    },
    appbar: {
      title: 'title',
      titleFunc: undefined,
      leftIcon: undefined,
      leftFunc: undefined,
      rightIcon: undefined,
      rightFunc: undefined
    },
    siderbar: {
      open: false
    }
  }
}

const common = (state = initState(), action) => {
  switch (action.type) {
    case 'INIT_COMMON':
      return initState()
    case 'ON_LODING':
      state.loding = true
      return merge({}, state, {})
    case 'NOT_LODING':
      state.loding = false
      return merge({}, state, {})
    case 'INIT_ALERT':
      state.alert = {
        open: false,
        msg: ''
      }
      return merge({}, state, {})
    case 'SET_ALERT':
      state.alert = {
        open: true,
        msg: action.val
      }
      return merge({}, state, {})
    case 'OPEN_SIDERBAR':
      state.siderbar = {
        open: true
      }
      return merge({}, state, {})
    case 'CLOSE_SIDERBAR':
      state.siderbar = {
        open: false
      }
      return merge({}, state, {})
    case 'INIT_APPBAR':
      state.appbar = {
        title: 'title',
        titleFunc: undefined,
        leftIcon: undefined,
        leftFunc: undefined,
        rightIcon: undefined,
        rightFunc: undefined
      }
      return merge({}, state, {})
    case 'SET_APPBAR':
      state.appbar = merge(
        state.appbar,
        {[action.obj]: action.val})
      return merge({}, state, {})
    default:
      return state
  }
}

export default common
