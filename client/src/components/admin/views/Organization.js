import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import AdminPage from '../layout/AdminPage';
import ApiProvider from '../../../context/ApiContext';
import OrganizationForm from '../organizations/OrganizationForm';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', as: Link, to: '/admin/organizations', link: true },
	{ key: 'Organization', content: 'Organization', active: true }
];

const Organization = (props) => {
    const { id } = props.match.params;
    
    const organization = {
		id: -1,
		name: '',
		image: '',
        config_file: '',
        disabled: false
    };
    const title = 'Organization' + (id ? ` #${id}` : '');

	return (
		<Layout active={props.match.url}>
            <AdminPage title={title} breadcrumbs={breadcrumbs}>
                <ApiProvider endpoint={`/organizations/${id}`} init={organization}>
                    <OrganizationForm />
                </ApiProvider>
            </AdminPage>
		</Layout>
	);
};

export default Organization;