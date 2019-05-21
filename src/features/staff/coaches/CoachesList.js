import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay'
import { createQueryRendererModern } from '../../../relay'
import { withRouter } from 'react-router-dom'

import { Row, Col } from '../../../common/Columns'
import TableCoaches from '../../../common/TableCoaches'
import { headers } from '../../../helpers/mocks/const'

class CoachesList extends Component {
    render() {
        const { coaches } = this.props.query
        if (coaches.edges.length > 0) {
            return (
                <>
                    <h1>Atletas</h1>
                    <Row>
                        <Col span={12}>
                            <TableCoaches headers={headers} rows={coaches} />
                        </Col>
                    </Row>
                </>
            )
        }

        return (
            <>
                <h2>Você ainda não possui uma comissão técnica. Que tal começá-la agora?</h2>
                <button onClick={() => {
                    this.props.history.push('/coaches/add')
                }}>Adicionar</button>
            </>
        )
    }
};

const CoachesListContainer = createFragmentContainer(CoachesList, {
    query: graphql`
        fragment CoachesList_query on Query {
            coaches{
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

export default withRouter(createQueryRendererModern(CoachesListContainer, CoachesList, {
    query: graphql`
        query CoachesListQuery {
            ...CoachesList_query
        }
    `
}))