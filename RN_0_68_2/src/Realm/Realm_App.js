import React, { useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';

import { getAllContacts, addContact, deleteAllContact} from './Realm';
function Realm_App (){
    const [contacts, setContacts] = useState(getAllContacts);
    const [counter, setCounter] = useState(contacts.length + 1);
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
            <View style={{margin:20,width:250}}>
                <Button title="Add"
                onPress={(()=>{
                    addContact(counter, 'shaz', 'tester', '911');
                    setContacts(getAllContacts);
                    setCounter(counter+1);
                })}/>
            </View>
            <View style={{margin:20,width:250}}>
                <Button title="Get"/>
            </View>
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