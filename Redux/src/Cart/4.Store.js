import { createStore } from 'redux'
import cartItemsReducer from './3.Reducer'

const store = createStore(cartItemsReducer)

export default store