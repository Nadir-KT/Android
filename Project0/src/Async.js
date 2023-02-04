import React, { useState } from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Async(){
    const [data, setData] = useState("");
    const add=async()=>{
        try{await AsyncStorage.setItem('note',"TODO");}
        catch(e){console.error(e);}
    }
    const get=async()=>{
        try{
            const value = await AsyncStorage.getItem('note');
            if(value!=null){setData(value);}
        }
        catch(e){console.error(e);}
    }
    return(
        <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:40,marginBottom:30}}>
                {data}
            </Text>
            <View style={{margin:20,width:250}}>
                <Button
                title="add"
                onPress={add}/>
            </View>
            <View style={{margin:20,width:250}}>
                <Button
                title="get"
                onPress={get}/>
            </View>
        </View>
    );
}