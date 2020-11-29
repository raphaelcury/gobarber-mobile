import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

const Profile = () => {
  return (
    <Background>
      <Text>Profile</Text>
    </Background>
  );
};

const profileIcon = ({ color, size }) => (
  <Icon name="person" color={color} size={size} />
);

Profile.navigationOptions = {
  tabBarIcon: profileIcon,
  tabBarLabel: 'Meu Perfil',
};

export default Profile;
