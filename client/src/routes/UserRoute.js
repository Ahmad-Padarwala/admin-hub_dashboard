import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from '../pages/User';


const UserRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/admin' element={<><User /></>} />
            </Routes>
        </>
    )
}

export default UserRoute
