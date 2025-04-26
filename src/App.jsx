import React from 'react'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';

import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Search from './Pages/Search';
import DetailRestaurant from './Pages/DetailRestaurant';

import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import RisetPassword from './Pages/Auth/RisetPassword';
import NewPasswordForm from './Pages/Auth/NewPassword';
import Payment from './Pages/Payment';

const App = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="search" element={<Search />} />
        <Route path="detail/restaurant" element={<DetailRestaurant />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="riset-password" element={<RisetPassword />} />
        <Route path="new-password" element={<NewPasswordForm />} />
      </Route>
    </Routes>
  )
}

export default App
