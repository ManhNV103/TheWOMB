import React from 'react';
import { Button } from 'semantic-ui-react';
import AdvertiserList from '../AdvertiserList';
import Layout from '../layout/Layout';
import useApi from '../../../util/useApi';

let chosenAdvertisers = new Set([]);

const Home = () => {
  const advertisers = useApi('/advertisers', {}, [])

  return (
    <Layout>
      <div className="ui container">
        <p>Please select the advertising avenues from below:</p>
        <AdvertiserList
          advertisers={advertisers}
          chosenAdvertisers={chosenAdvertisers}
        />
        <Button primary>Submit</Button>
      </div>
    </Layout>
  );
}

export default Home;