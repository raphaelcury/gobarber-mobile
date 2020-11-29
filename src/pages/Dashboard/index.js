import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

const Dashboard = () => {
  return (
    <Background>
      <Text>Dashboard</Text>
    </Background>
  );
};

const dashBoardIcon = ({ color, size }) => (
  <Icon name="event" color={color} size={size} />
);

Dashboard.navigationOptions = {
  tabBarIcon: dashBoardIcon,
  tabBarLabel: 'Meus Agendamentos',
};

export default Dashboard;
