import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import AdminPage from '../layout/AdminPage';
import OrganizationForm from '../organizations/OrganizationForm';
import ApiProvider from '../../../context/ApiContext';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', as: Link, to: '/admin/organizations', link: true },
	{ key: 'Organization', content: 'Add Organization', active: true }
];

const NewOrganization = (props) => {
    const organization = {
		id: -1,
		name: '',
		image: '',
        config_file: '',
        disabled: false
    };

	return (
		<Layout active={props.match.url}>
            <AdminPage title="Add Organization" breadcrumbs={breadcrumbs}>
				<Segment>
                    <ApiProvider endpoint="" init={organization}>
                        <OrganizationForm />
                    </ApiProvider>
				</Segment>
            </AdminPage>
		</Layout>
	);
};

export default NewOrganization;