import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homePage';
import BeginnerPage from './BeginnerPage'
import IntermediatePage from './IntermediatePage';
import AdvancedPage from './AdvancedPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomePage} />
      <Stack.Screen name= 'Beginner' component = {BeginnerPage} />
      <Stack.Screen name = 'Intermediate' component = {IntermediatePage}/>
      <Stack.Screen name = 'Advanced' component = {AdvancedPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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
