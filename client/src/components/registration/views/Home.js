import React from 'react';
import useApi from '../../../util/useApi';
import AdvertiserSelector from '../advertisers/AdvertiserSelector';
import Layout from '../layout/Layout';
import SelectedProvider from '../../../context/SelectedContext';
import ApiProvider from '../../../context/ApiContext';

const Home = () => {
    return (
        <Layout>
            <div className="ui container">
                <ApiProvider>
                    <SelectedProvider>
                        <AdvertiserSelector api={api} />
                    </SelectedProvider>
                </ApiProvider>
            </div>
        </Layout>
    );
}

export default Home;