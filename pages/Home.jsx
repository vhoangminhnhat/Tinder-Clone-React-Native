import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen Test</Text>
      <Button title='Go to chats' onPress={() => navigation.navigate("Chats")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})