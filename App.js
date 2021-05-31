import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import litsApartmentsScreens from './src/apartments/screens/lits_apartments/litsApartmentsScreens';

const Stack = createStackNavigator();//inicia la navegacion
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="litsApartments" component={litsApartmentsScreens} />
       
       //register
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
 
export default App;