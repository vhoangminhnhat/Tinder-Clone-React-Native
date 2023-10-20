import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import { AuthProvider } from "./hooks/useAuth";

const App: FC = () => {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Do the Authentication for the Main App */}
        <StackNavigation />
      </AuthProvider>
     
    </NavigationContainer>
  );
};

export default App;
