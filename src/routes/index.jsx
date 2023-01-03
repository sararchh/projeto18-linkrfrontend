import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

import SignIn from '../pages/signIn';

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
        {/* <Route path='/signUp' element={<SignUp />} /> */}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;