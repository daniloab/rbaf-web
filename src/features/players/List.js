import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay'
import { createQueryRendererModern } from '../../relay'
import { Row, Col } from '../../common/Columns'
import Table from '../../common/Table'
import { headers, rows } from '../../helpers/mocks/const'

const PlayersList = ({ query }) => {
    const { players } = query
    console.log(players)
    return (
        <>
            <h1>Atletas</h1>
            <Row>
                <Col span={12}>
                    <Table headers={headers} rows={rows} />
                </Col>
            </Row>

        </>
    )
};

const PlayersListContainer = createFragmentContainer(PlayersList, {
    query: graphql`
        fragment List_query on Query {
            players {
                name
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