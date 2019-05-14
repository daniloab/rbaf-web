import * as React from 'react'
import { QueryRenderer } from 'react-relay';
import hoistStatics from 'hoist-non-react-statics'
import environment from './Environment'

export default function createQueryRenderer(
    FragmentComponent,
    Component,
    config
) {
    const { query, queriesParams } = config

    class QueryRendererWrapper extends React.Component {
        render() {
            const variables = queriesParams ? queriesParams(this.props) : config.variables;

            return (
                <QueryRenderer
                    environment={environment}
                    query={query}
                    variables={variables}
                    render={({ error, props }) => {
                        if (error) {
                            return <span>{error.toString()}</span>
                        }

                        if (props) {
                            return <FragmentComponent {...this.props} query={props} />
                        }

                        return <span>loading</span>
                    }}
                />
            )
        }
    }
    return hoistStatics(QueryRendererWrapper, Component)   
}