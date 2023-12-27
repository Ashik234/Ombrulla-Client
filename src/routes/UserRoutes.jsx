import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../pages/Layout';
import Landing from '../pages/Landing';

function UserRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Landing/>}/>
        </Route>
        </Routes>

  )
}

export default UserRoutes