import React from 'react';
import { Segment } from 'semantic-ui-react';

const ApiSegment = ({ loading, children, ...rest }) => {
    return (
        <Segment loading={loading} style={{minHeight: '5rem'}} {...rest}>
            { children }
        </Segment>
    );
};

export default ApiSegment;