import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { get } from '../../../services/apiService';
import Layout from '../layout/Layout';
import OrganizationList from '../organizations/OrganizationList';

const Organizations = (props) => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const getOrganizations = async () => {
            const organizations = await get('/organizations');

            setOrganizations(organizations);
        }

        getOrganizations()
    }, [])
    
    return (
        <Layout active={props.match.url}>
            <Container fluid className="content">
                <Header as="h2">Advertisers</Header>
                <OrganizationList organizations={organizations} />
            </Container>
        </Layout>
    );
};

export default Organizations;