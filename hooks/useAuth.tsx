import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}:any) => {
  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){

}