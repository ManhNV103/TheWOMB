import React from 'react';
import AdvertiserSelector from '../advertisers/AdvertiserSelector';
import Layout from '../layout/Layout';
import SelectedProvider from '../../../context/SelectedContext';
import ApiProvider from '../../../context/ApiContext';

const Home = () => {
    return (
        <Layout>
            <div className="ui container">
                <ApiProvider endpoint="/advertisers" init={[]}>
                    <SelectedProvider>
                        <AdvertiserSelector />
                    </SelectedProvider>
                </ApiProvider>
            </div>
        </Layout>
    );
}

export default Home;