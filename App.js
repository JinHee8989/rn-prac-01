/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {Button, View, Text,StyleSheet, ScrollView} from 'react-native';
import Header from'./src/header';
import Generator from './src/generate';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component{

  onAddTextInput = () => {
    alert('I want to add a TextInput');
  }

  render(){

    return (

      <View style={styles.mainView}>
        <Input/>
        <Button title='add Text input'
        onPress={this.onAddTextInput}/>
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
  }



})

export default App;
