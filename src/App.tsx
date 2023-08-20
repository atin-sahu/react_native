import React from 'react';
// import store from './Store/Store'
import {
  View,
} from 'react-native';
import Counter from './Screen/Counter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Store';
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

import Home from './Screen/Home';

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          <Tab.Navigator >
            <Tab.Screen name='Counter' component={Counter} />
            <Tab.Screen name='Home' component={Home} />
            {/* <Counter /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>    
      // <View>
      //   <Counter />
      // </View>
  );
}

export default App;
