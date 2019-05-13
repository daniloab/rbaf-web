import React from 'react';

import {Row, Col} from '../../common/Columns'
import Table from '../../common/Table'
import {headers, rows} from '../../helpers/mocks/const'

const PlayersList = props => (
    <>
        <h1>Atletas</h1>
        <Row>
            <Col span={12}>
                <Table headers={headers} rows={rows}  />
            </Col>
        </Row>

    </>
);

export default PlayersList;
