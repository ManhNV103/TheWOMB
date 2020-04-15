import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Breadcrumb } from 'semantic-ui-react';
import useApi from '../../../util/useApi';
import Layout from '../layout/Layout';
import ApiContainer from '../blocks/ApiContainer';
import OrganizationForm from '../organizations/OrganizationForm';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', as: Link, to: '/admin/organizations', link: true },
	{ key: 'Organization', content: 'Organization', active: true }
];

const Organization = (props) => {
	const { id } = props.match.params;

	const api = useApi(`/organizations/${id}`, {}, {
		id: -1,
		name: '',
		image: '',
        config_file: '',
        disabled: false
	});

	return (
		<Layout active={props.match.url}>
			<Container fluid>
				<Header className="page-header" as="h2">Organization{ api.data.id ? ` #${api.data.id}` : '' }</Header>
				<Breadcrumb icon="right angle" sections={breadcrumbs}/>
                <ApiContainer api={api}>
                    <OrganizationForm api={api} />
                </ApiContainer>
			</Container>
		</Layout>
	);
};

export default Organization;