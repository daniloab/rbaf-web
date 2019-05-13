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

export default class App extends Component {
  state = {
    token: ''
  }

  componentDidMount() {
    const t = localStorage.getItem('token')

    this.setState({ state: t || '' })
  }

  render() {
    if (this.state.token)
      return (
        <>
          <GlobalStyle />
          <Header />
          <SideBar />
          <MainContainer>
            <Routes />
          </MainContainer>
          <Loading loading={true} />
        </>
      )
    else
      return (
        <>
          <GlobalStyle />
          <Routes />
        </>
      );

    // <QueryRenderer
    //   environment={environment}
    //   query={graphql`
    //   query AppQuery{
    //     users {
    //       name
    //       username
    //       email
    //     }  
    //   }
    // `}
    //   variables={{}}
    //   render={({ error, props }) => {
    //     console.log(props)
    //     if (error) {
    //       return <div>Error!</div>;
    //     }
    //     if (!props) {
    //       return <div>Loading...</div>;
    //     }
    //     return <div>User ID: {props.users[0]  .name}</div>;
    //   }}
    // />
  }
}
