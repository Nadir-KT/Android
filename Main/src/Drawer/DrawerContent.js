import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DrawerContent extends Component 
{
    render(){return(
        <View style={styles.container}>
            {/* <View style={{height:'25%',width:'100%',flexDirection:'row',backgroundColor:'black',alignItems:'center'}}> */}
            <View style={styles.profileContainer}>
                <View style={styles.profileIcon}>
                    <Image style={styles.profileImage} source={require('./Assets/Crown.png')}></Image>
                </View>
                <View style={{marginLeft: 70}}>
                    <Text style={styles.nameText}>Fawaz</Text>
                    <View style={styles.goldIcon}>
                        <Text style={{fontSize: 18, color: 'white'}}>Gold</Text>
                    </View>
                    <View style={styles.inviteIcon}>
                    <Text style={{fontSize: 15, color: 'green'}}>Invite</Text>
                    </View>
                    <Text style={{fontSize: 18, color: 'white',marginTop:-85,marginLeft:10}}>Total Coin</Text>
                    <Text style={{fontSize: 18, color: 'white'}}>coin : 20000</Text>
                </View>
            </View>
            <View style={{marginTop: 50 ,height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Home')}>Home</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Profile')}>Profile</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Records')}>Records</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Refund and Policies')}>Refund and Policies</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('About Us')}>About Us</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={styles.menuText} onPress={()=> this.props.navigation.navigate('Help')}>Help</Text>
            </View>
            <Text style={{fontSize:18,color:'black',marginTop:90,marginLeft:100}}>Logout</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'white'
    },
    menuText: {
        fontSize: 18, 
        marginTop: 10,
        marginLeft: 10,
        //fontWeight: 'bold', 
        color: 'black'
    },
    profileContainer: {
        height:'25%',
        width:'100%',
        flexDirection:'row',
        backgroundColor:'black'
        //alignItems: 'center'
    },
    profileIcon: {
        height: 100,
        width: 100,
        backgroundColor: 'grey',
        //marginTop: 10,
        //marginLeft: 10,
        borderRadius: 50
    },
    profileImage: {
        height: '100%',
        width: '100%'
    },
    nameText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5
    },
    goldIcon: {
        height: 25,
        width: 80,
        backgroundColor: 'grey',
        borderRadius: 5,
        alignItems: 'center',
    },
    inviteIcon: {
        height: 25,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: -160,
        alignItems: 'center',
        marginVertical: 60,
        borderWidth:2,
        borderColor:'yellow',
    }
})