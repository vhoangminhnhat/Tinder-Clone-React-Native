import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const user = false;
  return (

    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chats" component={Chats}/>
        </>
      ) : (
        <Stack.Screen name ="Login" component={Login}/>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation