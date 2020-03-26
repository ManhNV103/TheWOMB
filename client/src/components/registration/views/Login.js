import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Card, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import { login, isAuthenticated } from '../../../services/authService';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alerts, setAlerts] = useState([]);
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        if(isAuthenticated()) {
            setRedirect('/admin');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(await login(username, password)) {
            setRedirect('/admin');
        } else {
            setAlerts([
                ...alerts, 
                {
                    type: 'success',
                    message: 'BITCH'
                }
            ]);
        }
    };

    if(redirect) {
        return <Redirect to={redirect} />;
    } else {
        return (
            <Layout>
                <Container>
                    <Card className="login-container">
                        <Form onSubmit={handleSubmit}>
                            <Header>Admin Login</Header>
                            <Input fluid value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                            <Input fluid value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                            <div className="login-form-buttons">
                                <Checkbox label="Remember me?" />
                                <Button primary className="login-btn">Login</Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </Layout>
        );
    }
};

export default Login;