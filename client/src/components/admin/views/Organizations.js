import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import AdminPage from '../layout/AdminPage';
import ApiProvider from '../../../context/ApiContext';
import OrganizationList from '../organizations/OrganizationList';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Organizations', content: 'Organizations', active: true }
];

const Organizations = (props) => {
    return (
        <Layout active={props.match.url}>
            <ApiProvider endpoint={'/organizations'} init={[]}>
                <AdminPage title="Organizations" breadcrumbs={breadcrumbs}>
                    <OrganizationList />
                </AdminPage>
            </ApiProvider>
        </Layout>
    );
};

export default Organizations;