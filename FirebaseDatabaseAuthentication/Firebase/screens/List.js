import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

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
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ebebeb' }}>
            {(itemArray.length > 0)
                ? <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>{
                    itemArray.map((item, index) => {
                        return (<Text sty>{item.name}</Text>)
                    })
                }</View>
                : <Text>No Items</Text>
            }
        </View>
    );
}