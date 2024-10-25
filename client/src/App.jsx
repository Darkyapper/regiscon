import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import DashboardHome from './pages/DashboardHome';
import DashboardSettings from './pages/DashboardSettings';
import DashAddRegister from './pages/DashAddRegister';
import DashAddUsers from './pages/DashAddUsers';
import DashAdmUsers from './pages/DashAdmUsers';
import UsersEditUser from './pages/UsersEditUser';
import UsersPrint from './pages/UsersPrint';
import DashAddEvent from './pages/DashAddEvent';
import DashAdmEvents from './pages/DashAdmEvents';
import EventsEditEvent from './pages/EventsEditEvent';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/settings" element={<DashboardSettings />} />
        <Route path="/users/add" element={<DashAddUsers />} />
        <Route path="/register/add" element={<DashAddRegister />} />
        <Route path="/users" element={<DashAdmUsers />} />
        <Route path="/users/edit/:id" element={<UsersEditUser />} />
        <Route path="/users/print" element={<UsersPrint />} />
        <Route path="/events/add" element={<DashAddEvent />} />
        <Route path="/events" element={<DashAdmEvents />} />
        <Route path="/events/edit/:id" element={<EventsEditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
