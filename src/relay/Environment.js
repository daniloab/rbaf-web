import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import fetchQuery from './fetchQuery'

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
  network,
  store,
});

export default environment;