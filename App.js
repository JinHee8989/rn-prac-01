/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Header from'./src/header';
import Generator from './src/generate';
import NumList from './src/numlist';

class App extends Component{

  state = {
    appName: 'My First App',
    random: [36, 999]
  }
  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
    this.setState({
      random: newArray
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num,index)=>{
      return position != index;
    })
  }


  render(){

    return (

      <View style={styles.mainView}>
        <Header name={this.state.appName}/>

          <View>
            <Text onPress={(alert('Text Touch Event!'))}>
             Hello world~
            </Text>
          </View>

          <Generator add={this.onAddRandomNum}/>

          <NumList num={this.state.random}/>


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
