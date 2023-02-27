import React from 'react';
import { Text, View, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';

import { books } from './0.Data'
import { changeCount, counterIncrement, counterDecrement } from './3.Actions';
import { ADD_TO_CART } from './3.Reducer'
import { useDispatch } from 'react-redux';

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    //const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, marginTop: 24, marginHorizontal: 24 }}>
                <FlatList
                    data={books}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ height: 115, borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}
                            underlayColor='red'
                            badgeDotColors={'#446270'}
                            onPress={()=>dispatch({ type: ADD_TO_CART, payload: item })}
                        >
                            <Text style={{ marginHorizontal: 8 }}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}