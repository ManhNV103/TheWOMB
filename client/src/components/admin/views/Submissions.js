import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import AdminPage from '../layout/AdminPage';
import SubmissionList from '../submissions/SubmissionList';
import ApiProvider from '../../../context/ApiContext';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Submissions', content: 'Submissions', active: true },
];

const Submissions = (props) => {
    return (
        <Layout active={props.match.url}>
            <AdminPage title="Submissions" breadcrumbs={breadcrumbs}>
                <ApiProvider endpoint="/submissions" init={[]}>
                    <SubmissionList />
                </ApiProvider>
            </AdminPage>
        </Layout>
    );
};

export default Submissions;