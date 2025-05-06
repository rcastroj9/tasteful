import React from 'react'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';

import About from './Pages/About';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import NewPasswordForm from './Pages/Auth/NewPassword';
import Payment from './Pages/Payment';
import PlanEventForm from './Pages/PlanEventForm';
import EventsFound from './Pages/EventsFound';
import DetailEvent from './Pages/DetailEvent';
import { EventsProvider } from './context/EventsContext'
import InitialPage from './Pages/InitialPage';
import Quotes from './Pages/Quotes';

const App = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <EventsProvider>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route index element={<InitialPage />} />
          <Route path= "planEvent" element={<PlanEventForm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="eventsFound" element={<EventsFound />} />
          <Route path="detail/event" element={<DetailEvent />} />
          <Route path="payment" element={<Payment />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="new-password" element={<NewPasswordForm />} />
        </Route>
      </Routes>
    </EventsProvider>
  )
}

export default App
