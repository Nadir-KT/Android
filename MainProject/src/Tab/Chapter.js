import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Chapter extends Component 
{
    constructor(){
        console.log('Constructor Called')
        super();
        this.state = {
            headerText: 'Hi'
        }
    }
    static getDerivedStateFromProps(){
        console.log('GetDerivedStateFromProps Called')
        return null
    }
    updateState(){this.setState({headerText: 'Component Updated'})}
    componentDidMount(){
        console.log('Component Called')
    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate Called')
    //     return null
    // }
    componentDidUpdate(){console.log('componentDidUpdate Called')}
    componentWillUnmount(){console.log('componentWillUnmount Called')}
    render(){
        console.log('Render Called')
        return(
        <View style={styles.container}>
            <ScrollView style= {styles.scrollContainer}>
                <View style= {styles.scrollChildView}>
                    <View style= {styles.headerCard}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>{this.state.headerText}</Text>
                    </View>
                    <View style= {styles.baseLineCard}>
                        <View style= {styles.textView}>
                            <Icon name= 'edit' size= {16} color='black'/>
                            <Text style= {styles.text}>Mounting</Text>
                        </View>
                        <View style= {styles.textView}>
                            <Icon name= 'edit' size= {16} color='black'/>
                            <Text style= {styles.text}>Updating</Text>
                        </View>
                        <View style= {styles.textView}>
                            <Icon name= 'edit' size= {16} color='black'/>
                            <Text style= {styles.text}>Un Mounting</Text>
                        </View>
                        <TouchableHighlight style={{width:'80%',height:55,backgroundColor:'#360',alignItems:'center',justifyContent:'center',marginTop:10}}
                        underlayColor='transparent'
                        // onPress={()=>console.log('Button Pressed')}
                        onPress={()=>this.updateState()}>
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Updating</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    text: {fontSize: 16, marginLeft: 10},
    scrollContainer: {width: '100%', height: '100%'},
    scrollChildView: {width: '100%', alignItems: 'center', justifyContent: 'center'},
    headerCard: {
        width: '95%', 
        height: 200, 
        alignItems: 'center', 
        backgroundColor: '#ffffff',
        marginTop: 10,
        elevation: 4
    },
    baseLineCard: {
        width: '95%', 
        padding: 15, 
        backgroundColor: '#ffffff',
        marginTop: 30,
        elevation: 4
    },
    textView: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    }
})