import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const ApiContainer = (props) => {
    const options = props.options ?? {};

    if(props.api.loading) {
        return (
            <Segment {...options} style={{minHeight: '5rem'}}>
                <Dimmer inverted active>
                    <Loader inverted>Loading...</Loader>
                </Dimmer>
                { props.children }
            </Segment>
        );
    } else {
        return (
            <Segment {...options}>
                {props.children}
            </Segment>
        );
    }
};

export default ApiContainer;