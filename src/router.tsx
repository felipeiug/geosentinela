import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { LandingPage } from './pages';

type PrivateRouteProps = {
    children?: React.ReactNode;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    // if (true)
    return <Navigate to="/login" />; // Checagem da rota privada
    return children ? <>{children}</> : null;
};

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
};