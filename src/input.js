/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {View, Text,StyleSheet, TextInput} from 'react-native';

 class Input extends Component {

    state = {
        myTextInput: 'asdfsdf'
    }

    onChangeInput = (event) =>{
        this.setState({
            myTextInput: event
    })
}
    
    render(){
        return(
            <View style={styles.mainView}>
           <TextInput
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline = {true} //개행 기능 
                maxLength = {100} //입력값 길이 지정
                autoCapitalize = {'none'} //대문자 자동수정기능 
                editable={true} //입력 가능 여부 결정 
           />
           </View>
        )
    }
}
   
     
 
 const styles = StyleSheet.create({
    mainView: {
     width: '100%',
   },
   input:{
       width:'100%',
       backgroundColor: '#cecece',
       marginTop: 20,
       fontSize: 25,
       padding: 10
   }
 
 })
 
 export default Input;
 