/**
 * @flow
 * @relayHash 73f79f903aecd8a0ba3595c5d737f2e1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type List_query$ref = any;
export type ListQueryVariables = {||};
export type ListQueryResponse = {|
  +$fragmentRefs: List_query$ref
|};
export type ListQuery = {|
  variables: ListQueryVariables,
  response: ListQueryResponse,
|};
*/


/*
query ListQuery {
  ...List_query
}

fragment List_query on Query {
  players {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "List_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "players",
        "storageKey": null,
        "args": null,
        "concreteType": "player",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListQuery",
    "id": null,
    "text": "query ListQuery {\n  ...List_query\n}\n\nfragment List_query on Query {\n  players {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c75b9c8df712d6243a8762852732e15f';
module.exports = node;
