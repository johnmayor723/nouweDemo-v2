
import 'react-native-gesture-handler';
// In App.js in a new project
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack'
import {createDrawerNavigator} from "@react-navigation/drawer"

import MainTabScreen from './screens/maintabscreen'

import DrawerContent from './screens/drawercontents'
import SignInScreen from './screens/signin'
import SplashScreen from './screens/splash'
import SignUpScreen from './screens/signup'
import ForgotPasswordScreen from './screens/forgotpassword'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator initialRouteName="SplashScreen">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{ title: 'Home', headerShown: false}}/>
      <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{
        title: 'SIGN IN',
        headerStyle: {
          backgroundColor: '#000000',
          borderBottomColor:'#000000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
      }}/>
       <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{
        title: 'REGISTER',
        headerStyle: {
          backgroundColor: '#000000',
          borderBottomColor:'#000000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        }}/>
      <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{
        title: 'FORGOT PASSWORD',
        headerStyle: {
          backgroundColor: '#000000',
          borderBottomColor:'#000000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        }}/>
  </RootStack.Navigator>
);







const Drawer = createDrawerNavigator()



function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
      </Drawer.Navigator>

    </NavigationContainer>
  );
}


export default App;
