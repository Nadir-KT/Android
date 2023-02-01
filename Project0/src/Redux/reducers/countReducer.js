import { State } from "react-native-gesture-handler";
import { COUNTER_CHANGE } from "../constants";

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action)=>{
    switch(action.type){
        case COUNTER_CHANGE:
        return {
            ...state, // ... for persistent
            count: action.payload
        }
        default:
            return state;
    }
}

export default countReducer;