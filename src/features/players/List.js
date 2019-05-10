import React from 'react';

import {Row, Col} from '../../common/columns/Columns'
import Table from '../../common/table/Table'
import {headers, rows} from '../../helpers/mocks/const'

const List = props => (
    <>
        <h1>Atletas</h1>
        <Row>
            <Col span={12}>
                <Table headers={headers} rows={rows}  />
            </Col>
        </Row>

    </>
);

export default List;
