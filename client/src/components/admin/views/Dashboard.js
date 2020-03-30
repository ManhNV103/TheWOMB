import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Statistic, Breadcrumb } from 'semantic-ui-react';
import Layout from '../layout/Layout';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Dashboard', content: 'Dashboard', active: true }
];

const Dashboard = (props) => {
    return (
        <Layout active={props.match.url}>
            <Container fluid>
                <Header className="page-header" as="h2">Dashboard</Header>
				<Breadcrumb icon="right angle" sections={breadcrumbs} />
                <Card.Group itemsPerRow={4}>
                    <Card>
                        <Card.Content className="centered">
                            <Statistic>
                                <Statistic.Label>Submissions Queued</Statistic.Label>
                                <Statistic.Value>1,000</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="centered">
                            <Statistic>
                                <Statistic.Label>Submissions Failed</Statistic.Label>
                                <Statistic.Value>1,000</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="centered">
                            <Statistic>
                                <Statistic.Label>Submissions Total</Statistic.Label>
                                <Statistic.Value>1,000</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="centered">
                            <Statistic>
                                <Statistic.Label>Memes</Statistic.Label>
                                <Statistic.Value>1,000</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>
        </Layout>
    );
};

export default Dashboard;