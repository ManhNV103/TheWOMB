import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import Layout from '../layout/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="ui container centered">
                <Header as="h1" icon>
                    <Icon name="check circle outline" />
                    Event Registered Successfully
                    <Header.Subheader>
                        You will recieve an email shortly confirming your event details.
                    </Header.Subheader>
                </Header>
            </div>
        </Layout>
    );
}

export default Home;