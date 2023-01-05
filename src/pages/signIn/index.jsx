import React from 'react';
import { Logo } from '../../components/Logo';
import { PageContainer } from "./styles"
import Login from "./Login"
// import { Container } from './styles';

function SignIn() {
  return (
    <PageContainer>
        <Logo />
        <Login />
    </PageContainer>
  );
}


export default SignIn;