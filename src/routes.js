import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';

const Stack = createStackNavigator();

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  console.tron.log(`RENDERIZEI! SIGNED=${signed}`);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {signed ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
