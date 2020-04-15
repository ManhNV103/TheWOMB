import React, { useContext, useEffect } from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { AlertsContext } from '../../../context/AlertsContext';


const ApiContainer = (props) => {
    const { addAlert } = useContext(AlertsContext);
    const { error, setError } = props.api;
    const options = props.options ?? {};

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
            <Segment {...options} style={{height: '5rem'}}>
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