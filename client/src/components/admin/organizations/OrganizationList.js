import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const OrganizationList = (props) => {

    const rows = props.organizations.map(organization => {
        return (
            <Table.Row key={organization.id}>
                <Table.Cell>{ organization.id }</Table.Cell>
                <Table.Cell>{ organization.name }</Table.Cell>
                <Table.Cell><Button>Edit</Button></Table.Cell>
            </Table.Row>
        )
    });


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { rows }
                </Table.Body>
            </Table>
        </div>
    );
};

export default OrganizationList;