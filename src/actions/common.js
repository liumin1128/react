import store from '../stores/store'
import { openSiderBar } from '../actions'

export const OpenSiderBar = () => {
  return store.dispatch(openSiderBar())
}
