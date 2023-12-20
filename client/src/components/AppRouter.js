import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';



const NotFound = () => {
    return <>Not found!</>;
};

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component  }) =>
                <Route exact path={path} Component={Component }  />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route exact path={path} Component={Component} />
            )}
            <Route path={'*'} Component={NotFound}></Route>
        </Routes>
    );
};

export default AppRouter;
