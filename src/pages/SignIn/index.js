import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import logo from '~/assets/logo.png';

const SignIn = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            keyboardType="email-address"
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignLinkText>Crie sua conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
