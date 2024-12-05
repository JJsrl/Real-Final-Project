import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

const HomePage = ({navigation}) => {
return (
    
    <ScrollView style = {styles.scrollcontainer}>
      <Text style = {styles.header}>AI Text Translator</Text>
      <Button title = "Import PDF" onPress={() => navigation.navigate("pdf")} ></Button>
      <StatusBar style="auto" />
    </ScrollView>
  );
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
      height: 75
    }
  });
  
  export default HomePage;