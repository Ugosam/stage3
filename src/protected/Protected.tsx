import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function ProtectedRoute({ component: Component, ...rest }: any) {

    const navigate = useNavigate();



    function checkUserAuthentication() {

        // For example, you might check if there's a user token stored in local storage
        const userToken = localStorage.getItem('idToken');

        // If a user token exists, consider the user authenticated
        if (userToken) {
            return true;
        } else {
            return false;
        }
    }

    const isLogged = checkUserAuthentication();
    return isLogged ? <Component /> : <Navigate to="/" />;
}

export default ProtectedRoute;

