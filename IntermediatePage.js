import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';

const IntermediatePage = ({route, navigation}) => {
    const [text, textChange] = React.useState('Type Here!')
    return (
      <ScrollView style = {styles.scrollcontainer}>
        <Text style = {styles.header}>Intermediate Translator</Text>
        <Text style = {styles.text}>What would you like to ask?</Text>
        <TextInput style = {styles.text} placeholder ={text} onChangeText={textChange}/>
        <Button title = "Submit Answer" ></Button>
        <Text>{text}</Text>
        </ScrollView>
    )
    
}
const styles = StyleSheet.create({
    scrollcontainer: {
      paddingTop: 50,
      backgroundColor: '#d2f7ea',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      padding: 20,
      fontSize: 20,
      height: 80,
      alignSelf: 'center'
    },
    text: {
      padding: 20,
      fontSize: 15,
      height: 75,
      alignSelf: 'center'
    }
  });
  
  export default IntermediatePage;