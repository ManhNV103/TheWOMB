import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Breadcrumb } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import SubmissionList from '../submissions/SubmissionList';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Submissions', content: 'Submissions', active: true },
];

const Submissions = (props) => {
    return (
        <Layout active={props.match.url}>
            <Container fluid className="content">
                <Header className="page-header" as="h2">Submissions</Header>
				<Breadcrumb icon="right angle" sections={breadcrumbs} />
                <SubmissionList />
            </Container>
        </Layout>
    );
};

export default Submissions;