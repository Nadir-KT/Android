//import { legacy_createStore as createStore} from 'redux';
import { createStore, combineReducers } from 'redux';

import countReducer from "../src/Redux/reducers/countReducer";

const rootReducer = combineReducers(
    {
        counter: countReducer
    }
)
const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;