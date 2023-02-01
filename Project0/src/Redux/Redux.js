import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { changeCount } from './actions/count'

class Redux extends Component{
    //state={count:0}; // State: Value of a variable
    decrementCount(){
        let{count}=this.props;
        count--;
        this.props.counterChange(count);
    }
    incrementCount(){
        let{count}=this.props;
        count++;
        this.props.counterChange(count);
    }
    render(){ // class component does not return directly - use render to return
        const {count}=this.props; // initializing variable: count inside render
        return(
        <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <Button
            title="increment"
            onPress={()=>this.incrementCount()}/>
            <Text>{count}</Text>
            <Button
            title="decrement"
            onPress={()=>this.decrementCount()}/>
        </View>
    );}
}

const mapStateToProps = (state) => {
    return {count:state.counter.count}
}
const mapDispatchToProps = (dispatch) => {
    return {counterChange: (count)=> dispatch(changeCount(count))}
}
export default connect(mapStateToProps, mapDispatchToProps)(Redux);