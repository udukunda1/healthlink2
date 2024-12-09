import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home, { loader } from "./user/pages/home/Home";
import RootLayout from './user/pages/RootLayout';
import Directory, { dloader } from './pharmacy/pages/directory/Directory';
import ErrorPage from './user/pages/errorpage/ErrorPage';
import PharmacyDetails, { ploader } from './pharmacy/pages/pharmacydetails/PharmacyDetails';
import AvailabilitySearch from './pharmacy/pages/availabilitysearch/AvailabilitySearch';
import PharmaDashBoard, { dashboardloader } from './pharmacy/pages/dashboard/PharmaDashBoard';
import StudentLayout from './authentication/user/StudentLayout';
import AuthenticateLayout from './authentication/AuthenticateLayout';
import StudentLogin from './authentication/user/pages/StudentLogin';
import StudentSignUp from './authentication/user/pages/StudentSignUp';
import PharmacyLayout from './authentication/pharmacy/PharmacyLayout';
import PharmacyLogin from './authentication/pharmacy/pages/PharmacyLogin';
import PharmacySignUp from './authentication/pharmacy/pages/PharmacySignUp';
import ContextProvider from './shared/context/auth-context';
import PharmaContextProvider from './shared/context/pharma-auth-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '', element: <Home />, loader: loader},
      {path: 'directory', element: <Directory />, loader: dloader},
      {path: 'directory/details/:pharmacyId', element: <PharmacyDetails />, loader: ploader},
      {path: 'search', element: <AvailabilitySearch />, loader: dloader},
      {
        path: 'authenticate',
        element: <AuthenticateLayout />,
        children: [
          {
            path: 'student',
            element: <StudentLayout />,
            children: [
              {path: '', element: <StudentLogin />},
              {path: 'signup', element: <StudentSignUp />}
            ]
          },
          {
            path: 'pharmacy',
            element: <PharmacyLayout />,
            children: [
              {path: '', element: <PharmacyLogin />},
              {path: 'signup', element: <PharmacySignUp />}
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'pharmadashboard/:pharmaId',
    element: <PharmaDashBoard />, loader: dashboardloader
  }
])


function App() {


  return (
    <>
    <PharmaContextProvider>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
    </PharmaContextProvider>
  </>
  )
}

export default App;
