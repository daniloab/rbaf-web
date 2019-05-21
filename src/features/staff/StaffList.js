import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay'
import { createQueryRendererModern } from '../../relay'
import { Row, Col } from '../../common/Columns'
import Table from '../../common/Table'
import { headers } from '../../helpers/mocks/const'

const StaffList = ({ query }) => {
    const { coaches } = query
    console.log(coaches)
    return (
        <>
            <h1>Atletas</h1>
            <Row>
                <Col span={12}>
                    <Table headers={headers} rows={players} />
                </Col>
            </Row>
        </>
    )
};

const PlayersListContainer = createFragmentContainer(PlayersList, {
    query: graphql`
        fragment StaffList_query on Query {
            coaches(status:1){
                edges{
                  node{
                    name
                    lastname
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