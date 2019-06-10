import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay'
import { createQueryRendererModern } from '../../relay'
import { Row, Col } from '../../common/Columns'
import TablePlayers from '../../common/TablePlayers'
import { headers } from '../../helpers/mocks/const'

const PlayersList = ({ query }) => {
    const { players } = query
    console.log(players)
    return (
        <>
            <h1>Atletas</h1>
            <Row>
                <Col span={12}>
                    <TablePlayers headers={headers} rows={players.edges} />
                </Col>
            </Row>
        </>
    )
};

const PlayersListContainer = createFragmentContainer(PlayersList, {
    query: graphql`
        fragment List_query on Query {
            players(status:1){
                edges{
                  node{
                    _id
                    status
                    name
                    lastname
                    position
                    taxId
                  }
                }
              }
        }
    `
})

export default createQueryRendererModern(PlayersListContainer, PlayersList, {
    query: graphql`
        query ListQuery {
            ...List_query
        }
    `
})