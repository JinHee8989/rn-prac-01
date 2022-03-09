/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';

 // '{'와 '('의 차이 : '{'는 리턴되는 jsx컴포넌트가 없는경우 사용, 리턴이 있다면 소괄호 사용.
 //jsx는 자바스크립트에 xml을 추가한 확장형 문법.
//  exampleFunction = () => {
//  }
// exampleFunction = () => ( 
// )

 const Header = (props) => (
     <TouchableOpacity
     style={styles.header}
        //  onPress={()=>alert('hello world')}>
        //  onLongPress={()=>alert('hello world')}>
        //  onPressIn={()=>alert('hello world')}>
         onPressOut={()=>alert('hello world')}>

        <View>
            <Text>{props.name}</Text>
        </View>
     
     </TouchableOpacity>
 )
 
 const styles = StyleSheet.create({
    header: {
     backgroundColor: 'pink',
     padding: 5,
     alignItems : 'center',
     width: '100%',
   },
 
 })
 
 export default Header;
 