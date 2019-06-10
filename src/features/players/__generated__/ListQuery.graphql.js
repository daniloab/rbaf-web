/**
 * @flow
 * @relayHash 692757466a0e8bd1a691d7928fb8d28c
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
  players(status: 1) {
    edges {
      node {
        _id
        status
        name
        lastname
        position
        taxId
        id
      }
    }
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
        "selections": [
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
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
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
                    "name": "position",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "taxId",
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
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListQuery",
    "id": null,
    "text": "query ListQuery {\n  ...List_query\n}\n\nfragment List_query on Query {\n  players(status: 1) {\n    edges {\n      node {\n        _id\n        status\n        name\n        lastname\n        position\n        taxId\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c75b9c8df712d6243a8762852732e15f';
module.exports = node;
