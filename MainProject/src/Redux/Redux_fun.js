import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeCount, counterIncrement, counterDecrement } from './actions/count';

function Redux_fun (){
const count = useSelector(state => state.counter.count);
let dispatch = useDispatch();
    // decrementCount = () => {
    //     let temp = count - 1;
    //     dispatch(changeCount(temp));
    // }
    // incrementCount = () => {
    //     let temp = count + 1;
    //     dispatch(changeCount(temp));
    // }
    
    return(
        <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <Button
            title="increment"
            // onPress={()=>incrementCount()}
            onPress={()=>dispatch(counterIncrement())}
            />
            <Text>{count}</Text>
            <Button
            title="decrement"
            // onPress={()=>decrementCount()}
            onPress={()=>dispatch(counterDecrement())}
            />
        </View>
    );
}

export default Redux_fun;