import React from 'react';
import { Logo } from '../../components/Logo';
import Register from './Register';

import { PageContainer } from './styles'

// import { Container } from './styles';

function SignUp() {
  return (
    <PageContainer>
        <Logo />
        <Register />
    </PageContainer>
  );
}


export default SignUp;