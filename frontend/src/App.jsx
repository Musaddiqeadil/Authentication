import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import VerificationEmailPage from './pages/VerificationEmailPage';
import HomePage from './pages/HomePage';
import ForgotPassPage from './pages/ForgotPassPage';
import ResetPassword from './pages/ResetPassword';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerificationEmailPage/>} />
        <Route path="/forgot-password" element={<ForgotPassPage/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
      </Routes>
    </div>
  );
};

export default App;
