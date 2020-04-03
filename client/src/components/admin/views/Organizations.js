import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Breadcrumb } from 'semantic-ui-react';
import useApi from '../../../util/useApi';
import Layout from '../layout/Layout';
import OrganizationList from '../organizations/OrganizationList';

const sections = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', active: true }
];

const Organizations = (props) => {
	const api = useApi('/organizations', {}, [])

    return (
        <Layout active={props.match.url}>
            <Container fluid className="content">
                <Header className="page-header" as="h2">Organizations</Header>
				<Breadcrumb icon="right angle" sections={sections} />
                <OrganizationList api={api} />
            </Container>
        </Layout>
    );
};

export default Organizations;