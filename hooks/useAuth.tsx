import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}:any) => {
  return (
    <AuthContext.Provider value={{
      userName: 'bnm55vnn',
      password: '1234567'
    }}>
      {children}
    </AuthContext.Provider>
  )
};

interface AuthenticationProps {
  userName: string,
  password: string
}

export default function useAuth(){
  return React.useContext(AuthContext) as AuthenticationProps;
}