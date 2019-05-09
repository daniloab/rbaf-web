import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay/Environment'

export default class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
        query AppQuery{
          users {
            name
            username
            email
          }  
        }
      `}
        variables={{}}
        render={({ error, props }) => {
          console.log(props)
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.users[0]  .name}</div>;
        }}
      />
    );
  }
}
