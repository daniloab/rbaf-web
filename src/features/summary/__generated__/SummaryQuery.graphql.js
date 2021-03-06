/**
 * @flow
 * @relayHash 458fc7bb77243e0d8286c4092b35b983
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Summary_query$ref = any;
export type SummaryQueryVariables = {||};
export type SummaryQueryResponse = {|
  +$fragmentRefs: Summary_query$ref
|};
export type SummaryQuery = {|
  variables: SummaryQueryVariables,
  response: SummaryQueryResponse,
|};
*/


/*
query SummaryQuery {
  ...Summary_query
}

fragment Summary_query on Query {
  on: players(status: 1) {
    edges {
      node {
        name
        lastname
        id
      }
    }
  }
  off: players(status: 0) {
    edges {
      node {
        name
        lastname
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "PlayerEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "player",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastname",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SummaryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Summary_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SummaryQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "on",
        "name": "players",
        "storageKey": "players(status:1)",
        "args": [
          {
            "kind": "Literal",
            "name": "status",
            "value": 1,
            "type": "Int"
          }
        ],
        "concreteType": "PlayerConnection",
        "plural": false,
        "selections": (v0/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "off",
        "name": "players",
        "storageKey": "players(status:0)",
        "args": [
          {
            "kind": "Literal",
            "name": "status",
            "value": 0,
            "type": "Int"
          }
        ],
        "concreteType": "PlayerConnection",
        "plural": false,
        "selections": (v0/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SummaryQuery",
    "id": null,
    "text": "query SummaryQuery {\n  ...Summary_query\n}\n\nfragment Summary_query on Query {\n  on: players(status: 1) {\n    edges {\n      node {\n        name\n        lastname\n        id\n      }\n    }\n  }\n  off: players(status: 0) {\n    edges {\n      node {\n        name\n        lastname\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c87eb8747939232a83717a9ed45081ea';
module.exports = node;
