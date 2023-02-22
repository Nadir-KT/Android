import { CART, COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants";
// import { COUNTER_CHANGE, COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/index";

// export function changeCount(count) {
//     return {
//         type: COUNTER_CHANGE,
//         payload: count
//     }
// }

export const ADD_CART = 'ADD_CART' ;

export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}

export function counterIncrement(){
    return { type: COUNTER_INCREMENT }
}

export function counterDecrement(){
    return { type: COUNTER_DECREMENT }
}