import React from 'react';
import useApi from '../../../util/useApi';
import AdvertiserSelector from '../advertisers/AdvertiserSelector';
import Layout from '../layout/Layout';

const Home = () => {
    const api = useApi('/advertisers', {}, []);

    return (
        <Layout>
            <div className="ui container">
                <AdvertiserSelector api={api} />
            </div>
        </Layout>
    );
}

export default Home;