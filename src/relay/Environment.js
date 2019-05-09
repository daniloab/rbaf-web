import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  
  function fetchQuery(
    request,
    variables,
  ) {
    return fetch('http://localhost:9001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: request.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }
  
  const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),  
  });
  
  export default environment;