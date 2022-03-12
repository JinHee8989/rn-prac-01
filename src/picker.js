/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {View, Text,StyleSheet, TextInput} from 'react-native';
 import {Picker} from '@react-native-community/picker';

 class PickerComponent extends Component {
     state = {
         country: 'canada'
     }
    
    render(){
        return(
            <View style={styles.mainView}>
                <Picker 
                style={{height:50, width:250}}
                selectedValue={this.state.country}
                onValueChange={(val,index)=>this.setState({country:val})}>
                    <Picker.Item label="Korea" value="korea"/>
                    <Picker.Item label="Canada" value="canada"/>

                    </Picker>
           </View>
        )
    }
}
   
     
 
 const styles = StyleSheet.create({

   container:{
       flex:1,
       paddingTop:20,
       marginBottom:200,
       alignItems: 'center',
   }
 
 })
 
 export default PickerComponent;
 