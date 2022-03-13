/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {TextInput, Button, View, Text,StyleSheet, ScrollView} from 'react-native';
import Header from'./src/header';
import Generator from './src/generate';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';

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
          <Picker/>
          {/* <TextInput
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline = {true} //개행 기능 
                maxLength = {100} //입력값 길이 지정
                autoCapitalize = {'none'} //대문자 자동수정기능 
                editable={true} //입력 가능 여부 결정 
           />
        <Button title='add Text input'
        onPress={this.onAddTextInput}/>
        <ScrollView style={{width:'100%'}}>
          { this.state.alphabet.map((item,index)=>(
            <Text style={styles.mainText}
            key={index}>
                {item}
            </Text>
          ))
  }</ScrollView> */}
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
}




})

export default App;
