import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import LandingPage from '../pages/LandingPage';
import ServicesPage from '../pages/ServicesPage';
import BookingPage from '../pages/BookingPage';
import TimeSlotsPage from '../pages/TimeSlotsPage';
import MyBookingsPage from '../pages/MyBookingsPage';
import BookingDetailsPage from '../pages/BookingDetailsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import UserDashboardPage from '../pages/UserDashboardPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminBookingsPage from '../pages/admin/AdminBookingsPage';
import StaffPage from '../pages/StaffPage';
import StaffProfilePage from '../pages/StaffProfilePage';
import SchedulePage from '../pages/admin/SchedulePage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: '/', element: <LandingPage /> },
          { path: '/services', element: <ServicesPage /> },
          { path: '/booking', element: <BookingPage /> },
          { path: '/time-slots', element: <TimeSlotsPage /> },
          { path: '/my-bookings', element: <MyBookingsPage /> },
          { path: '/booking/:id', element: <BookingDetailsPage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
          { path: '/forgot-password', element: <ForgotPasswordPage /> },
          { path: '/dashboard', element: <UserDashboardPage /> },
          { path: '/staff', element: <StaffPage /> },
          { path: '/staff/:id', element: <StaffProfilePage /> },
          { path: '/profile', element: <ProfilePage /> },
        ],
      },
      {
        element: <DashboardLayout />,
        children: [
          { path: '/admin', element: <AdminDashboardPage /> },
          { path: '/admin/bookings', element: <AdminBookingsPage /> },
          { path: '/schedule', element: <SchedulePage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
