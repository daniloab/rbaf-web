/**
 * @flow
 * @relayHash e9e8504c78256d721b84589d15a26dfb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CoachesList_query$ref = any;
export type CoachesListQueryVariables = {||};
export type CoachesListQueryResponse = {|
  +$fragmentRefs: CoachesList_query$ref
|};
export type CoachesListQuery = {|
  variables: CoachesListQueryVariables,
  response: CoachesListQueryResponse,
|};
*/


/*
query CoachesListQuery {
  ...CoachesList_query
}

fragment CoachesList_query on Query {
  coaches {
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CoachesListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "CoachesList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CoachesListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "coaches",
        "storageKey": null,
        "args": null,
        "concreteType": "CoachConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CoachEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "coach",
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
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CoachesListQuery",
    "id": null,
    "text": "query CoachesListQuery {\n  ...CoachesList_query\n}\n\nfragment CoachesList_query on Query {\n  coaches {\n    edges {\n      node {\n        name\n        lastname\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '228a34b9c3a25317870c7bd1afff5527';
module.exports = node;
