import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
function App() {
  return(
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route
        path={'/main'}
        element={<Main/>}
        />
        <Route
        path={'/about'}
        element={<About/>}
        />
        <Route
        path={'*'}
        element={<Main/>}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
