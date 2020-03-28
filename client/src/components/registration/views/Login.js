import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Card, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import Alerts from '../blocks/Alerts';
import { login, isAuthenticated } from '../../../services/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        if(isAuthenticated()) {
            setRedirect('/admin');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(username, password, rememberMe);
            setRedirect('/admin');
        } catch(e) {
            setAlerts([
                {
                    type: 'negative',
                    message: e.message
                }
            ]);
        }
    };

    const dismissAlert = (key) => {
        const updated = alerts.filter((alert, i) => i !== key);
        setAlerts(updated);
    };

    if(redirect) {
        return <Redirect to={redirect} />;
    } else {
        return (
            <Layout>
                <Container>
                    <Alerts alerts={alerts} onDismiss={dismissAlert} />
                    <Card className="login-container">
                        <Form onSubmit={handleSubmit}>
                            <Header>Admin Login</Header>
                            <Input fluid value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username" />
                            <Input fluid value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder="Password" />
                            <div className="login-form-buttons">
                                <Checkbox label="Remember me?" onChange={() => setRememberMe(!rememberMe)} />
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