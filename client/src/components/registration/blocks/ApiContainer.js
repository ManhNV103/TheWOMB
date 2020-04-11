import React, { useContext, useEffect } from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { AlertsContext } from '../../../context/AlertsContext';


const ApiContainer = (props) => {
    const { addAlert } = useContext(AlertsContext);
    const { error, setError } = props.api;

    useEffect(() => {
        if(error) {
            addAlert({
                type: 'negative',
                message: error
            });
            setError('');
        }
    }, [error, addAlert, setError]);

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