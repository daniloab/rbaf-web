import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation LoginMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
    }
  }
`

function commit({ environment, input, onCompleted, onError }) {
  const variables = { input }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  })
}

export default {
  commit,
}
