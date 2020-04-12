import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Button, Segment } from 'semantic-ui-react';
import ApiContainer from '../blocks/ApiContainer';
import AdvertiserList from '../advertisers/AdvertiserList';

const AdvertiserSelector = (props) => {
    const history = useHistory();
    const api = props.api;
    const selected = new Set([]);

    const onSubmit = () => {
        if(selected.size) {
            history.push({
                pathname: '/registration',
                state: {
                    selected: selected
                }
            });
        }
    };

    return (
        <div>
            <Header as="h4" className="advertiser-header">Please select the advertising avenues from below:</Header>
                <ApiContainer api={api}>
                <AdvertiserList
                    api={api}
                    selected={selected}
                />
            </ApiContainer>
            <Segment basic vertical textAlign="right">
                <Button primary disabled={!selected.size} onClick={onSubmit}>Submit</Button>
            </Segment>
        </div>
    );
}

export default AdvertiserSelector;
