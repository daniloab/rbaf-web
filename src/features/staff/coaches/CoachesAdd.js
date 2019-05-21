import React, { Component } from 'react';

import { Row, Col } from '../../../common/Columns'

export default class CoachesAdd extends Component {
    render() {
        return (
            <Row>
                <Col span={12}>
                    <form action="">
                        <label htmlFor="">Setor: </label>
                        <input type="radio" name="squad" value="offense" checked/> Ataque
                        <input type="radio" name="squad" value="defense"/> Defesa
                        <input type="radio" name="squad" value="specialTeams"/> Special Teams

                        <label>CPF:</label>
                        <input type="text" name="firstname" />

                        <label>First name:</label>
                        <input type="text" name="firstname" />

                        <label>Last name:</label>
                        <input type="text" name="lastname"/> 

                        Cargo
                        <input type="text" name="job" />
                        <input type="submit" value="Submit" />
                    </form>
                </Col>
            </Row>
        );
    }
}
