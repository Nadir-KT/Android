import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import database from '@react-native-firebase/database';

let itemRef = database().ref('/Items');

export default function List() {
    const [itemArray, setItemArray] = useState([]);
    useEffect(() => {
        itemRef.on('value', snapshot => {
            let data = snapshot.val();
            const items = Object.values(data);
            console.log(items);
            setItemArray(items);
        })
    }, [])
    const handleDelete = (index) => {
        let childKey = keys[index];
        itemRef.child(childKey).remove();
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ebebeb' }}>
            {(itemArray.length > 0)
                ? <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>{
                    itemArray.map((item, index) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ paddingEnd: 10 }}>{item.name}</Text>
                                <Button title="Update"
                                    onPress={() => handleDelete(index)} />
                                <Button title="Delete" />
                            </View>
                        )
                    })
                }</View>
                : <Text>No Items</Text>
            }
        </View>
    );
}