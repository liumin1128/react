export const initCommon = () => {
  return {
    type: 'INIT_COMMON'
  }
}

export const initAlert = () => {
  return {
    type: 'INIT_ALERT'
  }
}

export const openSiderBar = () => {
  return {
    type: 'OPEN_SIDERBAR'
  }
}

export const closeSiderBar = () => {
  return {
    type: 'CLOSE_SIDERBAR'
  }
}

export const setAlert = (val) => {
  return {
    type: 'SET_ALERT',
    val: val
  }
}

export const onLoding = () => {
  return {
    type: 'ON_LODING'
  }
}

export const notLoding = () => {
  return {
    type: 'NOT_LODING'
  }
}
