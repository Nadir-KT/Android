import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import database from '@react-native-firebase/database';

let itemRef = database().ref('/Items');

export default function List() {
    const [itemArray, setItemArray] = useState([]);
    const [keys, setKeys] = useState([]);
    const [ifUpdate, setIfUpdate] = useState(false);
    const [updateText, setUpdateText] = useState('');
    const [updateIndex, setUpdateIndex] = useState(null);
    useEffect(() => {
        itemRef.on('value', snapshot => {
            let data = snapshot.val();
            console.log(data)
            setKeys(Object.keys(data))
            console.log(keys);
			const items = Object.values(data);
            setItemArray(items);
        })
    }, [])
    const handleDelete = (index) => {
        let childKey = keys[index];
        itemRef.child(childKey).remove();
    }
    const handleUpdate = (name, index) => {
        setUpdateText(name)
        setUpdateIndex(index)
        setIfUpdate(true)
    }
    const submitUpdate = ()=> {
        let childKey = keys[updateIndex];
        itemRef.child(childKey).update({
            name: updateText
        })
        setIfUpdate(false)
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ebebeb' }}>
            {(itemArray.length > 0)
                ? 
                    ifUpdate ?
                    <View>
                        <TextInput style={{borderWidth:2,borderColor:'black'}}
                    value = { updateText }
                    onChangeText={setUpdateText}
                    />
                <Button title="Submit" onPress={()=>submitUpdate()}/>
                <Button title="Cancel" onPress={()=>setIfUpdate(false)}/>
                </View>
                :
                < View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {itemArray.map((item, index) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ paddingEnd: 10 }}>{item.name}</Text>
                                <Button title="Update" onPress={() => handleUpdate(item.name, index)} />
                                <Button title="Delete" onPress={() => handleDelete(index)} />
                            </View>
                        )
                    })
                    }</View>
            : <Text>No Items</Text>
}
        </View >
    );
}