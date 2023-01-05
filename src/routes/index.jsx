import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/timeline' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;