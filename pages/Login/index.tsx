import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const {userName, password} = useAuth();
  return (
    <View>
      <Text>This is login Page</Text>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({})