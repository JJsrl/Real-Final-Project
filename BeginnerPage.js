import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Button, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import Configuration from 'openai'
import OpenAIApi from 'openai'

const configuration = new Configuration({
  apiKey: 'api key here',
})

const openai = new OpenAIApi(configuration)

const BeginnerPage = ({route, navigation}) => {
  const [input, setInput] = React.useState('Type Here!')
  const [output, setOutput] = React.useState('')

  const handleInput = async () => {
    try {
      const userInput = input
      const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a very helpful assistant, who is desined to explain things at a very beginner level like they're talking to a 5th grader." },
        {
            role: "user",
            content: userInput,
        },
    ],
      temperature: 0,
      max_tokens: 1024,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],

      });
      setOutput(response.choices[0].message.content);
    } catch (error) {
        console.log(error);
    }

    setInput('');
  }  


    return (
      <ScrollView style = {styles.scrollcontainer}>
        <Text style = {styles.header}>Beginner Translator</Text>
        <Text style = {styles.text}>What would you like to ask?</Text>
        <TextInput style = {styles.text} placeholder ={input} onChangeText={setInput}/>
        <TouchableOpacity onPress={handleInput}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
        <Text>{output}</Text>
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
  
  export default BeginnerPage;