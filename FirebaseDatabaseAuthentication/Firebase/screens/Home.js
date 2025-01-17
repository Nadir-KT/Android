import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home Page</Text>
            <Button
                title="Add an Item"
                onPress={() => navigation.navigate('AddItem')}
            />
            <Button
                title="List of Items"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    )
}