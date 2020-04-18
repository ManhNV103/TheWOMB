import React from 'react';
import { Container, Header, Breadcrumb } from 'semantic-ui-react';

const AdminPage = ({ children, title, breadcrumbs }) => {
    return (
        <Container fluid className="content">
            <Header className="page-header" as="h2">{ title }</Header>
            <Breadcrumb icon="right angle" sections={breadcrumbs} />
            { children }
        </Container>
    );
};

export default AdminPage;