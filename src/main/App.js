import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay/Environment'

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
        query UserQuery {
          users {
            name
            username
            email
          }  
        }
      `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.users.name}</div>;
        }}
      />
    );
  }
}
