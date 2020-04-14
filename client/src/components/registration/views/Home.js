import React from 'react';
import useApi from '../../../util/useApi';
import AdvertiserSelector from '../advertisers/AdvertiserSelector';
import Layout from '../layout/Layout';
import SelectedProvider from '../../../context/SelectedContext';

const Home = () => {
    const api = useApi('/advertisers', {}, []);

    return (
        <Layout>
            <div className="ui container">
                <SelectedProvider>
                    <AdvertiserSelector api={api} />
                </SelectedProvider>
            </div>
        </Layout>
    );
}

export default Home;