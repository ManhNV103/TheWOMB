import React from 'react';
import { Header, Button, Segment } from 'semantic-ui-react';
import ApiContainer from '../blocks/ApiContainer';
import AdvertiserList from '../AdvertiserList';
import Layout from '../layout/Layout';
import useApi from '../../../util/useApi';

let chosenAdvertisers = new Set([]);

const Home = () => {
  const api = useApi('/advertisers', {}, [])

  return (
    <Layout>
      <div className="ui container">
        <Header as="h4" className="advertiser-header">Please select the advertising avenues from below:</Header>
        <ApiContainer api={api}>
          <AdvertiserList
            advertisers={api.data}
            chosenAdvertisers={chosenAdvertisers}
          />
        </ApiContainer>
        <Segment basic vertical textAlign="right">
          <Button primary>Submit</Button>
		</Segment>
      </div>
    </Layout>
  );
}

export default Home;