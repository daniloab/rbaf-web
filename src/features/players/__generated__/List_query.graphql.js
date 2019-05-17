/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type List_query$ref: FragmentReference;
export type List_query = {|
  +players: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name: ?string,
        +lastname: ?string,
      |}
    |}>
  |},
  +$refType: List_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "List_query",
  "type": "Query",
  "metadata": null,
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a7a110f5e7f0695459f43720f8c48bf8';
module.exports = node;
