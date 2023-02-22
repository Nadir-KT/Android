import { State } from "react-native-gesture-handler";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { cart } from "../actions/count";

import { CART, COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants";
// import { COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/index";

const defaultStore = {
    tasks: [],
}

// const countReducer = (state = initialState, action)=>{
//     switch(action.type){
//         case COUNTER_CHANGE:
//         return {
//             ...state, // ... for persistent
//             count: action.payload
//         }
//         default:
//             return state;
//     }
// }

const taskReducer = (store = defaultStore, action) => {
    switch(action.type){
    case 'ADD_TASK': 
    // do something
    default:
    return store
    }
}

export default taskReducer;