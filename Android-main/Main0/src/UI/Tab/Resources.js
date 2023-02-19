import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'; // FlatList for response handling
import axios from 'axios';

export default class Resources extends Component 
{
    constructor(){
        super();
        this.state = {
            loader: false, 
            DATA: []
        } // State of loader(ActivityIndicator)
    }

    getData(){
        this.setState({loader: true}) // ActivityIndicator - True
        //fetch('https://api.sampleapis.com/coffee/hot')
        fetch('https://jsonplaceholder.typicode.com/todos/')
        //fetch('https://api.ipify.org?format=json')
        //.then((data) => data.text()) // convetrind fetch data to a text file
        .then((data) => data.json()) // convetrind fetch data to a json file
        .then((data) =>{
            if(data.length>0){this.setState({DATA: data})}
            this.setState({loader: false}) // ActivityIndicator - False
            console.log('YOUR RESPONSE IS:', data)})
        .catch((error) => {
            this.setState({loader: false}) // ActivityIndicator - False
            console.log('ERROR IS:',error)})
    }

    getAxiosData(){
        this.setState({loader: true})
        //axios.get('https://api.sampleapis.com/coffee/hot')
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        //axios.get('http://code.google.com/apis/websearch/')
        //axios.get('https://api.ipify.org?format=json')
        .then((response)=>{
            if(response.data.length>0){this.setState({DATA: response.data})}
            this.setState({loader: false}) // ActivityIndicator - False
            console.log('AXIOS:RESPONSE',response.data)})
        .catch((err)=>{
            this.setState({loader: false}) // ActivityIndicator - False
            console.log('AXIOS:ERROR',err)})
    }

    //componentDidMount(){this.getData()}

    render(){
        const renderItem = ({item}) => (
            <View style= {styles.dataContainer}>
                <Text style= {styles.dataText}>{item.id}</Text>
                <Text style= {styles.dataDescription}>{item.title}</Text>
            </View>
        )
        return( // ActivityIndicator for data fetch (Retrieval of data)
        <View style={styles.container}>
            <ActivityIndicator size={50} color= 'blue' animating={this.state.loader}/>
            <Text style={styles.text} onPress= {()=> this.getAxiosData()}>Resources</Text>
            <FlatList style= {{width: '95%', marginTop: 10}}
            data={this.state.DATA}
            renderItem= {renderItem}/>
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
    text: {fontSize: 24, fontWeight: 'bold', color: 'black'},
    dataContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        elevation: 4,
        marginBottom: 10
    },
    dataText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    dataDescription: {
        fontSize: 16,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 10
    }
})