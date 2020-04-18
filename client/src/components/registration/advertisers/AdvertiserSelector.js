import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Button, Segment } from 'semantic-ui-react';
import AdvertiserList from '../advertisers/AdvertiserList';
import ApiSegment from '../../common/ApiSegment';
import { SelectedContext } from '../../../context/SelectedContext';
import { ApiContext } from '../../../context/ApiContext';

const AdvertiserSelector = (props) => {
    const history = useHistory();
    const { selected } = useContext(SelectedContext);
    const { data: advertisers, loading } = useContext(ApiContext);

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
            <ApiSegment basic vertical loading={loading}>
                <AdvertiserList
                    advertisers={advertisers}
                    selected={selected}
                />
            </ApiSegment>
            <Segment basic vertical textAlign="right">
                <Button primary disabled={!selected.size} onClick={onSubmit}>Submit</Button>
            </Segment>
        </div>
    );
}

export default AdvertiserSelector;
