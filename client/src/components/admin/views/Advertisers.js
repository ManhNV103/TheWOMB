import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { get } from '../../../services/apiService';
import Layout from '../layout/Layout';
import AdvertiserList from '../advertisers/AdvertiserList';

const Advertisers = (props) => {
    const [advertisers, setAdvertisers] = useState([]);

    useEffect(() => {
        const getAdvertisers = async () => {
            const advertisers = await get('/advertisers');

            console.log(advertisers);

            setAdvertisers(advertisers);
        }

        getAdvertisers()
    }, [])
    
    return (
        <Layout active={props.match.url}>
            <Container fluid className="content">
                <Header as="h2">Advertisers</Header>
                <AdvertiserList advertisers={advertisers} />
            </Container>
        </Layout>
    );
};

export default Advertisers;