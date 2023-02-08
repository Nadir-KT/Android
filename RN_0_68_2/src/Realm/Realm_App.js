import React, { useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, TextInput } from 'react-native';

import { getAllContacts, addContact, deleteAllContact} from './Realm';
function Realm_App (){
    const [contacts, setContacts] = useState(getAllContacts);
    const [counter, setCounter] = useState(contacts.length + 1);
    const [textInputValue, setTextInputValue] = useState('');
    const [textInputValue2, setTextInputValue2] = useState('');
    const renderItem = ({item}) => (
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>{item.recordID}</Text>
            <Text>{item.givenName}</Text>
            <Text>{item.familyName}</Text>
            <Text>{item.phoneNumber}</Text>
        </View>
    );
    return(
        <SafeAreaView style={{padding: 3}}>
            <TextInput style= {{textAlign: 'center',height: 40,width:250,borderWidth: 1,borderColor: 'green',}} 
                placeholder= "Name" placeholderTextColor={'#446270'} 
                value={textInputValue}
                onChangeText={(a) => setTextInputValue(a)}
            />
            <TextInput style= {{textAlign: 'center',height: 40,width:250,borderWidth: 1,borderColor: 'green',}} 
                placeholder= "Phone No." placeholderTextColor={'#446270'} 
                value={textInputValue2}
                onChangeText={(a) => setTextInputValue2(a)}
            />
            <View style={{margin:20,width:250}}>
                <Button title="Add"
                onPress={(()=>{
                    addContact(counter, textInputValue, textInputValue2, 'Delete');
                    setContacts(getAllContacts);
                    setCounter(counter+1);
                    setTextInputValue('');
                    setTextInputValue2('');
                })}/>
            </View>
            {/* <View style={{margin:20,width:250}}>
                <Button title="Get"/>
            </View> */}
            <View style={{margin:20,width:250}}>
                <Button title="Delete"
                onPress={()=>{
                    deleteAllContact();
                    setContacts(getAllContacts);
                    setCounter(1);
                }}/>
            </View>
            <View>
                <Text style={{marginTop:10,fontSize:25,fontWeight:'bold'}}>Contacts</Text>
                <FlatList
                data={contacts}
                keyExtractor={item => item.recordID}
                renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

export default Realm_App;