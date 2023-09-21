import React, { useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Gallery from './gallery/Gallery';
import Login from './login/Login';
import ProtectedRoute from './protected/Protected';

function App() {
  // const isAuthenticated = true; // You may need to implement actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate to="/"/>} />
        {/* <Route path="/gallery" element={<ProtectedRoute Component={Gallery} />} /> */}

      </Routes>
    </div>
  );
}

export default App;
