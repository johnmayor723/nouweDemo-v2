
import 'react-native-gesture-handler';
// In App.js in a new project
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {createDrawerNavigator} from "@react-navigation/drawer"

import MainTabScreen from './screens/maintabscreen'


const Drawer = createDrawerNavigator()



function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
      </Drawer.Navigator>

    </NavigationContainer>
  );
}


export default App;
