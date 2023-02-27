import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function VerifyCode(props) {
    const [code, setCode] = useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25 }}>Enter OTP</Text>
            <TextInput autoFocus
                keyboardType='numeric'
                style={{ borderWidth: 2, borderColor: 'lightblue', width: 300, marginVertical: 30, fontSize: 25, padding: 10, borderRadius: 8 }}
                value={code}
                onChangeText={setCode}
            />
            <Button
                title="Confirm OTP"
                onPress={() => props.onSubmit(code)}
            />
        </View>
    )
}