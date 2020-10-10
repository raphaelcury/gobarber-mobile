import React from 'react';
import { Image } from 'react-native';

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

const SignUp = () => {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Digite seu nome"
          />
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
        <SignLink onPress={() => {}}>
          <SignLinkText>Crie sua conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;
