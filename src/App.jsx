import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import FirstTime from "./pages/FirstTime";
import { AuthContext } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import LoggedInRoute from "./components/LoggedInRoute";
import FirstTimeChecker from "./components/FirstTimeChecker";
import CreateGroup from "./pages/CreateGroup";

function App() {
    return (
        <AuthContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoggedInRoute><Home /></LoggedInRoute>} />
                    <Route path="/login" element={<LoggedInRoute><Login /></LoggedInRoute>} />
                    <Route path="/register" element={<LoggedInRoute><SignUp /></LoggedInRoute>} />
                    <Route path="/dashboard" element={<PrivateRoute><FirstTimeChecker><Dashboard /></FirstTimeChecker></PrivateRoute>} />
                    <Route path="/first-time" element={<PrivateRoute><FirstTime /></PrivateRoute>} />
                    <Route path="/create-group" element={<PrivateRoute><CreateGroup /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthContext>
    );
}

export default App;
