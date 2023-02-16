import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class State extends Component{
    state={count:0}; // State: Value of a variable
    decrementCount(){
        let{count}=this.state;
        count--;
        this.setState({count});
    }
    incrementCount(){
        let{count}=this.state;
        count++;
        this.setState({count});
    }
    render(){ // class component does not return directly - use render to return
        const {count}=this.state; // initializing variable: count inside render
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
    );}}

    export default State;