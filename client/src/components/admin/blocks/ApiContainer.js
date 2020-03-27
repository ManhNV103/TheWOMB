import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const ApiContainer = (props) => {
    if(props.api.loading) {
        return (
            <Segment basic style={{height: '5rem'}}>
                <Dimmer inverted active>
                    <Loader inverted>Loading...</Loader>
                </Dimmer>
                { props.children }
            </Segment>
        );
    } else {
        return (
            <Segment basic>
                {props.children}
            </Segment>
        );
    }
};

export default ApiContainer;