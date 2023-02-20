import { State } from "react-native-gesture-handler";

import { COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants";
// import { COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/index";

const initialState = {
    count: 0
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

const countReducer = (state = initialState, action)=>{
    switch(action.type){
        case COUNTER_INCREMENT:
        return {
            //...state, // ... for persistent
            count: state.count + 1
        }
        case COUNTER_DECREMENT:
        return {
            //...state, // ... for persistent
            count: state.count - 1
        }
        default:
            return state;
    }
}

export default countReducer;