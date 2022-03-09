/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {View, Text,StyleSheet, Button} from 'react-native';

 const Generator = (props) => {
     return(

        <View style={styles.generator}>
            <Button 
                title="Add Number"
                onPress={props.add()}
                >

            </Button>
        </View>
     )
   
     }
 
 const styles = StyleSheet.create({
    generator: {
     backgroundColor: '#782346',
     padding: 5,
     alignItems : 'center',
     width: '100%',
   },
 
 })
 
 export default Generator;
 