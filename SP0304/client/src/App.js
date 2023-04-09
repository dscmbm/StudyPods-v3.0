import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import LandingPage from './components/LandingPage';
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import ContestPage from './components/ContestPage';
import Dashboard from './Admin/Dashboard'
import CreateContest from './Admin/CreateContest'
import PastContest from './Admin/PastContest'
import LeaderBoard from './Admin/LeaderBoard'
import AdminRegister from './Admin/AdminRegister'
import AdminLogin from './Admin/AdminLogin'
import AdminPassword from './Admin/AdminPassword'
/** auth middleware */
import { AuthorizeUser,AuthorizeAdmin, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage></LandingPage>
    },
    {
        path : '/Username',
        element : <Username></Username>
    },
    {
        path : '/AdminLogin',
        element : <AdminLogin></AdminLogin>
    },
    {
        path : '/AdminPassword',
        element : <ProtectRoute><AdminPassword></AdminPassword></ProtectRoute>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/AdminRegister',
        element : <AdminRegister></AdminRegister>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/Dashboard',
        element : <AuthorizeAdmin><Dashboard/></AuthorizeAdmin>
    },
    {
        path : '/CreateContest',
        element : <AuthorizeAdmin><CreateContest/></AuthorizeAdmin>
    },
    {
        path : '/LeaderBoard',
        element : <AuthorizeAdmin><LeaderBoard/></AuthorizeAdmin>
    },
    {
        path : '/PastContest',
        element : <AuthorizeAdmin><PastContest/></AuthorizeAdmin>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/ContestPage',
        element : <AuthorizeUser><ContestPage></ContestPage></AuthorizeUser>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
