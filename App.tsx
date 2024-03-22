import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {OnBoarding} from './src/screens';
import Splash from './src/screens/splash/Splash'
import Login from './src/screens/login/Login';
import TabNavigator from './src/navigators/tab-navigator/TabNavigator';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
    });
  }, []);

  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        {showSplash ? (
          <Splash />
        ) : (
          <NavigationContainer>
            {isFirstLaunch ? (
              <Stack.Navigator>
                <Stack.Screen
                  name="Onboarding"
                  component={OnBoarding}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="TabNavigator"
                  component={TabNavigator}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        )}
      </SafeAreaView>
    </>
  );
};

export default App;