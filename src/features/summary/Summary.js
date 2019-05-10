import React from 'react';
import styled from 'styled-components'

import Card from '../../common/Card'
import { Row } from '../../common/Columns'

const Summary = () => (
    <>
        <h1>Bem vindo(a)</h1>
        <Row>
            <Card span={3} spamSm={12} text="Atletas ativos"/>
            <Card span={3} spamSm={12} text="Atletas ativos"/>
            <Card span={3} spamSm={12} text="Atletas ativos"/>
            <Card span={3} spamSm={12} text="Atletas ativos"/>
        </Row>
    </>
);

export default Summary;
