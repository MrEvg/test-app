import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  DropdownScreen,
  GradientScreen,
  SetTimeScreen,
  UploadImageScreen,
} from '@routing/navigators/protected';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e405fd',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 64,
        },
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="dropdown"
        component={DropdownScreen}
        options={{
          tabBarLabel: 'TAB 1',
        }}
      />
      <Tab.Screen
        name="uploadImage"
        component={UploadImageScreen}
        options={{
          tabBarLabel: 'TAB 2',
        }}
      />
      <Tab.Screen
        name="setTime"
        component={SetTimeScreen}
        options={{
          tabBarLabel: 'TAB 3',
        }}
      />
      <Tab.Screen
        name="gradient"
        component={GradientScreen}
        options={{
          tabBarLabel: 'TAB 4',
        }}
      />
    </Tab.Navigator>
  );
};
