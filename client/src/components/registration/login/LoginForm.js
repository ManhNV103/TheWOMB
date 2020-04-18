import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';
import { login, isAuthenticated } from '../../../services/AuthService';
import { AlertsContext } from '../../../context/AlertsContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [redirect, setRedirect] = useState('');
    const { addAlert } = useContext(AlertsContext);

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
            addAlert({
                type: 'negative',
                message: e.message
            });
        }
    };

    if(redirect) {
        return <Redirect to={redirect} />;
    } else {
        return (
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
        );
    }
};

export default LoginForm;