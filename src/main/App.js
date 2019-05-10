import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay/Environment'

import Header from '../common/navigation/Header'
import SideBar from '../common/navigation/SideBar'
import GlobalStyle from '../common/GlobalStyle'
import MainContainer from '../common/container/MainContainer'
import Login from '../features/login/Login'
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header/>
        <SideBar/>
        <MainContainer>
          <Routes />
        </MainContainer>
      </>
      
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
    );
  }
}
