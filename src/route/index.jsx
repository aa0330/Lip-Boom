/* 
    ReactRouter6

        Navigate用于重定向
  
*/

import { createHashRouter, Navigate } from "react-router-dom";
import Login from '@/pages/login'
import Entry from "../pages/entry";
import Home from '@/pages/home'
import Account from '@/pages/account'

export const globalRouters = createHashRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Entry />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                elemet: <Navigate to="/login" />
            }
        ]
    },

])





