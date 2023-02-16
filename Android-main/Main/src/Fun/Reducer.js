import React, { Component, useEffect, useState, useContext, useRef, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import List from './List'
import Title from './Title'
import Input from './Input'
const randomId=()=>Math.random().toString()
const createItem=(title)=> ({id:randomId(),title})
const types={ADD:'ADD',REMOVE:'REMOVE'}
export const actionCreators={
    add: (title)=>({type: types.ADD,payload:createItem(title)}),
    remove:(id)=>({type: types.REMOVE,payload:id})
}
export const initialState={
    items: [
        createItem('Click to remove'),
        createItem('Learn React Native'),
        createItem('Write Code'),
        createItem('Ship App')
    ]
}
export function reducer(state,action){
    switch (action.type){
        case types.ADD:return{...state,items:[...state.items,action.payload]}
        case types.REMOVE:return{...state,items:state.items.filter((item)=>item.id !== action.payload),
        }
            
    }
}
export default function fun(){
    const[state, dispatch] = useReducer(reducer,initialState)
    return(
        <View>
            <Title>TO-Do List</Title>
            <Input
              placeholder={'type a todo, then hit enter!'}
              onSubmitEditing={(title)=>dispatch(actionCreators.add(title))}/>
            <List
              items={state.items}
              onPressItem={(id)=>dispatch(actionCreators.remove(id))}/>
        </View>
    )
}
const themes = {
    light:{color:'red',size:20},
    dark:{color:'yellow',size:20}
};
const ThemeContest = React.createContext(themes.light);
function Toolbar(props){
    return(
        <View>
            <ThemedButton/>
        </View>
    );
}
function ThemedButton(){
    const theme = useContext(ThemeContest);
    return(
        <View style={styles.container}>
            <Text style={{fontSize:theme.size,color:theme.color}}>
                I'm styled by theme context!
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}
// export default function fun()
// {
//     return(
//         <View style={styles.container}>
//             <ThemeContest.Provider value={themes.light}>
//                 <Toolbar/>
//             </ThemeContest.Provider>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});