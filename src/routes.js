import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { history } from './helpers/History'
import PrivateRoute from './helpers/PrivateRoute'

import Login from './features/login/Login'
import Summary from './features/summary/Summary'
import Teams from './features/teams/List'
import PlayersList from './features/players/List'

import {
    Header,
    GlobalStyle,
    Loading,
    SideBar
} from './common/index'

import MainContainer from './common/MainContainer'

const privateRoute = [
    {
      path: "/",
      name: "Home",
    }
  ];
  

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