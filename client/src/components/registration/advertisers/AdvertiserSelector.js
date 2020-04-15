import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Button, Segment } from 'semantic-ui-react';
import ApiContainer from '../blocks/ApiContainer';
import AdvertiserList from '../advertisers/AdvertiserList';
import { SelectedContext } from '../../../context/SelectedContext';

const AdvertiserSelector = (props) => {
    const api = useApi('/advertisers');
    const history = useHistory();
    const { selected } = useContext(SelectedContext);

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
                <ApiContainer api={api} options={{ vertical: 'vertical', basic: 'basic' }}>
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
