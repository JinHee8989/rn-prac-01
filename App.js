/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {TextInput, Button, View, Text,StyleSheet, ScrollView,Image} from 'react-native';
import Header from'./src/header';
import Generator from './src/generate';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg'
import Modal from './src/modal';



class App extends Component{

  state = {
    myTextInput: '',
    alphabet: ['a','b','c','d']
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet,prevState.myTextInput]
      }
    })
  }

  onChangeInput = (event) =>{
    this.setState({
        myTextInput: event
    })
  }

  render(){

    return (

      <View style={styles.mainView}>
         <Modal/>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    alignItems : 'center',
    // justifyContent : 'center',

  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView:{
    backgroundColor: 'yellow',
    flex: 2,
    marginBottom: 10,
    width: '100%',
  },
  mainText:{
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  input:{
    width:'100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
},
  image:{
    backgroundColor:'yellow',
    width:'100%',
    height:300
  }




})

export default App;
