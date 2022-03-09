/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';

 const NumList = (props) => {
     return(

        props.num.map((item, idx) => (
            <TouchableOpacity 
            style={styles.numlist} 
            key={idx}
            onPress={()=>props.delete()}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
    )
}
   
     
 
 const styles = StyleSheet.create({
    numlist: {
     backgroundColor: '#cecece',
     padding: 5,
     alignItems : 'center',
     width: '100%',
     marginTop: 5
   },
 
 })
 
 export default NumList;
 