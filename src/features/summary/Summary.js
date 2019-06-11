import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay'
import { createQueryRendererModern } from '../../relay'

import Card from '../../common/Card'
import { Row } from '../../common/Columns'

const Summary = ({ query }) => {
    const { off, on } = query
    const date = {}

    return (
        <>
            <h1>Bem vindo(a)</h1>
            <Row>
                <Card span={4} spamSm={12} value={0} text="Faltas Útimo Treino" />
                <Card span={4} spamSm={12} value={on.edges.length} text="Atletas ativos" />
                <Card span={4} spamSm={12} value={off.edges.length} text="Atletas Inativos" />
            </Row>
        </>
    )
};

const SummaryContainer = createFragmentContainer(Summary, {
    query: graphql`
        fragment Summary_query on Query {
            on:players(status:1){
                edges{
                  node{
                    name
                    lastname
                  }
                }
              }
              off:players(status:0){
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

export default createQueryRendererModern(SummaryContainer, Summary, {
    query: graphql`
        query SummaryQuery {
            ...Summary_query
        }
    `
})
