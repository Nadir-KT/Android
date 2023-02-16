import React, {Component} from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
class FlexContent extends Component 
{
    render()
    {
        return(<View>
            <Text style={styles.contentStyle}>IOT{this.props.name}</Text>
            </View>)
    }
}
export default class Flexbox extends Component
{
    constructor()
    {
        super();
        this.state= 
        {
            main_text: 'Instrument',
            sub_text: 'Cluster'
        }
    }

    componentDidMount(){console.log('The username is: ', this.props.route.params.username)}

    updateText()
    {
        console.log('update method clicked')
        this.setState({main_text: 'Embedded'})
        this.setState({sub_text: 'Systems'})
    }
    render()
    {
        return(<View style={styles.container}>
            <Text style= {styles.text}>PVG </Text>
            <Text style= {styles.text}>Technology</Text>
            <Text style= {styles.text}>{this.state.main_text}</Text>
            <Text style= {styles.text}>{this.state.sub_text}</Text>
            <TouchableHighlight style={styles.button} underlayColor='red' onPress={()=> this.updateText()}>
                <Text style= {styles.buttonText}>UPDATE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor='red' onPress={()=> this.props.navigation.navigate('Drawer')}>
                <Text style= {styles.buttonText}>CLICK HERE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor='red' onPress={()=> this.props.navigation.navigate('Tab')}>
                <Text style= {styles.buttonText}>TAB</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor='red' onPress={()=> this.props.navigation.navigate('BottomTab')}>
                <Text style= {styles.buttonText}>BOTTOM_TAB</Text>
            </TouchableHighlight>
            <FlexContent name= {this.props.route.params.username}></FlexContent>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: 
    {
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems:'center', 
        justifyContent:'center', 
        // flexDirection:'row' // shows child class in row
    },
    text: {fontSize:24,color:'#000',fontWeight:'bold'},
    button: 
    {
        width: '60%', 
        height: 55, 
        backgroundColor: 'green', 
        alignItems: "center", 
        justifyContent: 'center', 
        borderRadius: 6,
        marginTop: 20
    },
    buttonText: 
    {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    contentStyle: 
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'violet',
        marginTop: 20
    }
})