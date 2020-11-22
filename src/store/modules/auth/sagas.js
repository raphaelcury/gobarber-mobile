import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { signinSuccess, signupSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;
    if (user.provider) {
      Alert.alert('Erro no login', 'Usuário é prestador de serviço');
      yield put(signFailure());
      return;
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signinSuccess(token, user));
    // history.push('/dashboard');
  } catch (error) {
    Alert.alert('Erro no login', 'Usuário ou senha inválidos');
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    const user = response.data;
    Alert.alert('Sucesso', `Usuário ${user.name} criado com sucesso.`);
    yield put(signupSuccess(user));
  } catch (error) {
    Alert.alert('Erro no cadastro', 'Verifique seus dados.');
    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
  takeLatest('@auth/SIGNOUT', signOut),
]);
