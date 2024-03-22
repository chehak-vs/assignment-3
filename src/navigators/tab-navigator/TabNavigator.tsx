import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Discovery, Education, Home, Map, News} from '../../screens';
import {
  DiscoveryIcon,
  EducationIcon,
  HomeIcon,
  MapIcon,
  NewsIcon,
} from '../../assets';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF647C',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => <MapIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={{
          tabBarIcon: ({focused}) => <EducationIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={{
          tabBarIcon: ({focused}) => <DiscoveryIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({focused}) => <NewsIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
