import React, { useState } from 'react';
import { Container, Card, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';
import { login, logout } from '../../../services/authService';
import useApi from '../../../util/useApi';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
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
    );
};

export default Login;