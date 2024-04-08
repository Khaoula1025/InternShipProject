import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import GestLayout from "./components/GestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./pages/Dashboard";

const routes = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users"  />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/Dashboard",
                element: <Dashboard />,
            },
        ],
    },

    {
        path: "/",
        element: <GestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes);
export default router;
