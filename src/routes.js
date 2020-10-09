import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import AgentArea from './pages/AgentArea';
import Conversation from './pages/Conversation';

const Stack = createStackNavigator();

function App() {
  const store = useSelector(state => state.headerIntentPage);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            gestureEnabled: true,
            headerTitleAlign: 'left',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { 
              elevation: 0, backgroundColor: '#32394E'
            },
            headerTintColor: '#fff',
          }
        } >
        <Stack.Screen
          name="login" component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="agentarea" component={AgentArea}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="conversation" component={Conversation}
          options={{ headerTitle: store.name }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
