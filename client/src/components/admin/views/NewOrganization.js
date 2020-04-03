import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Breadcrumb, Segment } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import OrganizationForm from '../organizations/OrganizationForm';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', as: Link, to: '/admin/organizations', link: true },
	{ key: 'New Organization', content: 'Organization', active: true }
];

const NewOrganization = (props) => {
	return (
		<Layout active={props.match.url}>
			<Container fluid>
				<Header className="page-header" as="h2">New Organization</Header>
				<Breadcrumb icon="right angle" sections={breadcrumbs}/>
				<Segment>
					<OrganizationForm organization={{}} />
				</Segment>
			</Container>
		</Layout>
	);
};

export default NewOrganization;