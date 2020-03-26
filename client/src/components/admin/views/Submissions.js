import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { get } from '../../../services/apiService';
import Layout from '../layout/Layout';
import SubmissionList from '../advertisers/AdvertiserList';

const Submissions = (props) => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const getSubmissions = async () => {
            const submissions = await get('/submissions');

            setSubmissions(submissions);
        }

        getSubmissions()
    }, [])
    
    return (
        <Layout active={props.match.url}>
            <Container fluid className="content">
                <Header as="h2">Submissions</Header>
                <SubmissionList submissions={submissions} />
            </Container>
        </Layout>
    );
};

export default Submissions;