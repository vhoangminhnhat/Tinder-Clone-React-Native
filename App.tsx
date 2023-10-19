import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

const App: FC = () => {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      {/* <AuthProvider> */}
        {/* Do the Authentication for the Main App */}
        <StackNavigation />
      {/* </AuthProvider> */}
     
    </NavigationContainer>
  );
};

export default App;
