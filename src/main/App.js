import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay/Environment'

import {
  Header,
  GlobalStyle,
  Loading,
  SideBar
} from '../common/index'

import MainContainer from '../common/MainContainer'
import Routes from './routes'

const Private = () => (
  <>
      <GlobalStyle />
      <Routes />
  </>
);

const Public = () => (
  <>
      <GlobalStyle />
      <Header />
      <SideBar />
      <MainContainer>
        <Routes />
      </MainContainer>
  </>
)
const user = {token: ''}
export default class App extends Component {
  componentDidMount() {
    user.token = localStorage.getItem('token')
  }

  render() {
    return user.token ? <Private /> : <Public token={user.token}/>
  }
}
