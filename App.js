
import {HomeScreen} from "./Home.js"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ActivityIndicator, Button } from 'react-native';
const persistor = persistStore(store)
const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <Provider store = {store}>
    <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
     />
    </Stack.Navigator>
  </NavigationContainer>
  </PersistGate>
  </Provider>
  )
  }
  