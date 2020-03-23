import React from 'react';
import { Container, Card, Header, Form, Input, Checkbox, Button } from 'semantic-ui-react';

const Login = () => {
    return (
        <Container>
            <Card className="login-container">
                <Form>
                    <Header>Admin Login</Header>
                    <Input fluid placeholder="Username" />
                    <Input fluid placeholder="Password" />
                    <div className="login-">
                        <Checkbox label="Remember me?" />
                        <Button primary className="login-btn">Login</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;