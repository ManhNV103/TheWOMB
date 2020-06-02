import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import LoginForm from '../login/LoginForm';

const Login = () => {
    return (
        <Layout>
            <Container>
                <LoginForm />
            </Container>
        </Layout>
    );
};

export default Login;