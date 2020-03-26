import React from 'react';
import { Container, Header, Card, Statistic } from 'semantic-ui-react';
import Layout from '../layout/Layout';

const Dashboard = (props) => {
    return (
        <Layout active={props.match.url}>
            <Container fluid>
                <Header as="h2">Dashboard</Header>
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