import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { history } from './helpers/History'
import PrivateRoute from './helpers/PrivateRoute'

import Login from './features/login/Login'
import Summary from './features/summary/Summary'
import PlayersList from './features/players/List'
import CoachesList from './features/staff/coaches/CoachesList'
import CoachesDetails from './features/staff/coaches/CoachesDetails'
import CoachesAdd from './features/staff/coaches/CoachesAdd'

import {
    Header,
    GlobalStyle,
    Loading,
    SideBar
} from './common/index'

import MainContainer from './common/MainContainer'  

const RestrictedArea = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <SideBar />
            <MainContainer>
                <Switch>
                    <PrivateRoute exact path="/" component={Summary} />
                    <PrivateRoute exact path="/atletas" component={PlayersList} />
                    <PrivateRoute exact path="/coaches" component={CoachesList} />
                    <PrivateRoute exact path="/coaches/add" component={CoachesAdd} />
                    <PrivateRoute exact path="/coaches/detalhes/:coachId" component={CoachesDetails} />
                    <PrivateRoute exact path="/coaches/detalhes/:id/editar" component={CoachesDetails} />
                </Switch>
            </MainContainer>
        </>
    )
}

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute path="/" component={() => RestrictedArea()}/>
        </Switch>
    </Router>
)

export default Routes