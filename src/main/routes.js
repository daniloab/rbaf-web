import React, {Fragment} from 'react'
import { Router, Route } from 'react-router-dom'

import { history } from '../helpers/History'

import {PrivateRoute} from '../helpers/PrivateRoute'
import Login from '../features/login/Login'
import Summary from '../features/summary/Summary'
import Teams from '../features/teams/List'
import List from '../features/players/List'

const Routes = () => (
    <Router history={history}>
        <Fragment>
            <Route exact path='/login' component={Login}/>
            
            <Route exact path='/' component={Summary} />            
            <Route exact path='/times' component={Teams} />
            <Route exact path='/jogadores' component={List} />
            {/* <PrivateRoute exact path='/' component={Summary} />            
            <PrivateRoute exact path='/times' component={Teams} />
            <PrivateRoute exact path='/jogadores' component={Players} /> */}
        </Fragment>
    </Router>
)

export default Routes