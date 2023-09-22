import {HistoryScreen} from "./History.js"
import {HomeScreen} from "./Home.js"
import { MessageScreen } from "./Message.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ActivityIndicator, Button } from 'react-native';
import {navButton } from "./Components.js";
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
      options= {{headerRight: () => 
        navButton("History")
       }}
     />
     <Stack.Screen
     name="History"
     component={HistoryScreen}
     options= {{headerRight: () => 
      navButton("Home")
     }}
     />
     <Stack.Screen
     name="Message"
     component={MessageScreen}
        options= {{headerRight: () => 
        navButton("History")
       }}
       />
    </Stack.Navigator>
  </NavigationContainer>
  </PersistGate>
  </Provider>
  )
  }
  