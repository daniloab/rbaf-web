import React from 'react'
import styled from 'styled-components'

import { Col } from './Columns'

const Content = styled.div`
    width: 100%;
    background: #ffffff;
    border-radius: 2px;
    padding: 10px;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.34901960784313724);

    p {
        margin: 0;
        font-size: 1.4rem;
    }
`

export default props => {
    const { value } = props

    return (
        <Col span={props.col} spanSm={props.colSm}>
            <Content>
                {/* <Styledloading loading={props.loading}>                
                <i className="fas fa-spinner"></i>
            </Styledloading> */}
                <div>{props.icon}</div>
                <div>
                    <p>{props.text}</p>
                    <p>{value}</p>
                </div>
            </Content>
        </Col>
    )
}