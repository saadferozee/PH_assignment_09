import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import About from "../Pages/About";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Toys from "../Pages/Toys";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ForgetPass from "../Pages/ForgetPass";
import Profile from "../Pages/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: '/toys',
                Component: Toys
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/forget-pass',
                Component: ForgetPass
            }
        ]
    },
])

export default router;