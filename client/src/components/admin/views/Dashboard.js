import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Statistic } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import AdminPage from '../layout/AdminPage';

const breadcrumbs = [
	{ key: 'Admin', content: 'Admin', as: Link, to: '/admin', link: true },
	{ key: 'Dashboard', content: 'Dashboard', active: true }
];

const Dashboard = (props) => {
    return (
        <Layout active={props.match.url}>
            <AdminPage title="Dashboard" breadcrumbs={breadcrumbs}>
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
                                <Statistic.Label>Other</Statistic.Label>
                                <Statistic.Value>1,000</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </AdminPage>
        </Layout>
    );
};

export default Dashboard;