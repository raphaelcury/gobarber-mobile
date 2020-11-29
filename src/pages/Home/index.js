import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const dashBoardIcon = ({ color, size }) => (
  <Icon name="event" color={color} size={size} />
);

const profileIcon = ({ color, size }) => (
  <Icon name="person" color={color} size={size} />
);

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        style: {
          backgroundColor: '#8d41a8',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarIcon: dashBoardIcon, tabBarLabel: 'Agendamentos' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: profileIcon, tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

export default Home;
