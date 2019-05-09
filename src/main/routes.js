import React, {Fragment} from 'react'
import { Router, Route } from 'react-router-dom'

import { history } from '../helpers/history'

import {PrivateRoute} from '../helpers/privateRoute'
import Login from '../features/login/Login'
import Summary from '../features/summary/Summary'
import Teams from '../features/teams/Teams'
import Players from '../features/players/Players'

const Routes = () => (
    <Router history={history}>
        <Fragment>
            <Route exact path='/login' component={Login}/>
            <PrivateRoute exact path='/' component={Summary} />            
            <PrivateRoute exact path='/times' component={Teams} />
            <PrivateRoute exact path='/jogadores' component={Players} />
        </Fragment>
    </Router>
)

export default Routes