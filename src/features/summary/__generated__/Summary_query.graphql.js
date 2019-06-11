/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Summary_query$ref: FragmentReference;
export type Summary_query = {|
  +on: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name: ?string,
        +lastname: ?string,
      |}
    |}>
  |},
  +off: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name: ?string,
        +lastname: ?string,
      |}
    |}>
  |},
  +$refType: Summary_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "Summary_query",
  "type": "Query",
  "metadata": null,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7bd71f9a6821ce1901f18f081dd88b3';
module.exports = node;
