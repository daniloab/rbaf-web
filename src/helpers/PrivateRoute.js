import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import {checkLocalStorage} from '../helpers/LocalStorage'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = checkLocalStorage('token', null)
  const isAuth = auth ? true : false

  return (
    <Route {...rest} render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  )
}

export default withRouter(PrivateRoute)