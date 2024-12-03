import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LabAssignment1 from './screens/LabAssignment1';
import LabAssignment2 from './screens/LabAssignment2';
import LabAssignment3 from './screens/LabAssignment3';
import LabAssignment4 from './screens/LabAssignment4';

// Create a Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LabAssignment1" component={LabAssignment1} />
        <Stack.Screen name="LabAssignment2" component={LabAssignment2} />
        <Stack.Screen name="LabAssignment3" component={LabAssignment3} />
        <Stack.Screen name="LabAssignment4" component={LabAssignment4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
