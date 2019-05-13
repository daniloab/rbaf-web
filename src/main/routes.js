import React, {Fragment} from 'react'
import { Router, Route } from 'react-router-dom'

import { history } from '../helpers/History'

import {PrivateRoute} from '../helpers/PrivateRoute'
import Login from '../features/login/Login'
import Summary from '../features/summary/Summary'
import Teams from '../features/teams/List'
import PlayersList from '../features/players/List'

const NotFound = () => {
    return (
        <div>sorry, we didn't find what you are looking =(</div>
    )
}

const Routes = () => (
    <Router history={history}>
        <>
            <Route exact path='/login' component={Login}/>        
            <PrivateRoute exact path='/' component={Summary} />  
            <PrivateRoute exact path='/jogadores' component={PlayersList} />
            {/* <Route component={NotFound}/> */}
        </>
    </Router>
)


export default Routes