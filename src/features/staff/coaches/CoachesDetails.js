import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

class CoachesDetails extends Component {
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { match: { params }, location, history } = this.props
        console.log(params, location, history)
    }
    
    render() {        
        const { match: { params }, location, history } = this.props

        if(params.id > 0){
            return (
                <h1>Coaches Editar</h1>
            )
        }

        return (
            <h1>Coaches Visualizar</h1>
        );
    }
}

export default withRouter(CoachesDetails)
