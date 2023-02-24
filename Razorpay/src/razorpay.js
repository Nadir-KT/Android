import React from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function Razorpay() {
    const handlePayment = () => {
        var options = {
            name: 'In Makes',
            description: "For test payment",
            currency: 'INR',
            amount: 50000,
            key: 'rzp_test_3bVAi7XMPRnnwe',
            prefill: {
                email: 'ss@gmail.com',
                contact: '9191919191',
                name: 'Tester'
            },
            theme: { color: '#f37251' }
        }
        RazorpayCheckout.open(options).then((data) => {
            console.log("data", data)
            Alert.alert('Success')
        }).catch((error) => {
            console.log("error", error)
            Alert.alert(`Error : ${error.code} | ${error.description}`)
        })
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 200, height: 200 }} source={require('./assets/Crown.png')} />
            <Text style={{ fontSize: 25 }}>Crown</Text>
            <Text style={{ fontSize: 25 }}>$9999999999999</Text>
            <View style={{ width: 200 }}>
                <Button title="BUY"
                    onPress={() => handlePayment()} />
            </View>
        </View>
    )
}