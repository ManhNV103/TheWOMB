import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Breadcrumb, Segment } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import OrganizationForm from '../organizations/OrganizationForm';
import useApi from '../../../util/useApi';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', as: Link, to: '/admin/organizations', link: true },
	{ key: 'Organization', content: 'Add Organization', active: true }
];

const NewOrganization = (props) => {
	const api = useApi('', {}, {
		id: -1,
		name: '',
		image: '',
		config_file: ''
	});

	return (
		<Layout active={props.match.url}>
			<Container fluid>
				<Header className="page-header" as="h2">Add Organization</Header>
				<Breadcrumb icon="right angle" sections={breadcrumbs}/>
				<Segment>
					<OrganizationForm api={api} />
				</Segment>
			</Container>
		</Layout>
	);
};

export default NewOrganization;