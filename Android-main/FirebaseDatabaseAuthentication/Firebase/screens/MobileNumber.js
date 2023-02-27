import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function MobileNumber(props) {
    const[phoneNumber, setPhoneNumber] = useState(null)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25 }}>Enter Phone Number</Text>
            <TextInput autoFocus
                style={{ borderWidth: 2, borderColor: 'lightblue', width: 300, marginVertical: 30, fontSize: 25, padding: 10, borderRadius: 8 }}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button
                title="Sign In With OTP"
                onPress={() => props.onSubmit(phoneNumber)}
            />
        </View>
    )
}