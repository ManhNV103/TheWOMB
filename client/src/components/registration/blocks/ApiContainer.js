import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const ApiContainer = (props) => {
    if(props.api.loading) {
        return (
            <Segment vertical basic style={{height: '5rem'}}>
                <Dimmer inverted active>
                    <Loader inverted>Loading...</Loader>
                </Dimmer>
                { props.children }
            </Segment>
        );
    } else {
        return (
            <Segment vertical basic>
                {props.children}
            </Segment>
        );
    }
};

export default ApiContainer;