import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './Login'
import { Users } from './Users'


export const useRouters = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route component={Users} path='/users' />
                <Redirect to='/users' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route component={Login} path='/' exact />
            <Redirect to='/' /> 
        </Switch>
    )
}
