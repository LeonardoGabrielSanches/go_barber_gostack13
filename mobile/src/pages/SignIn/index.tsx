import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={LogoImg} />

      <Title>Faça seu logon</Title>

      <Input />
      <Input />

      <Button
        onPress={() => {
          console.log(1);
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
