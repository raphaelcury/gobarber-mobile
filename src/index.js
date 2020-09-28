import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Teste from '~/Teste';

// import { Container } from './styles';

const src = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Olá mundo!</Text>
        <Teste />
      </View>
    </NavigationContainer>
  );
};

export default src;
