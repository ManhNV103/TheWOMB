import React from 'react';
import { Table, Button, Icon, Image } from 'semantic-ui-react';

const OrganizationList = (props) => {

    const rows = props.organizations.map(organization => {
        return (
            <Table.Row key={organization.id}>
				<Table.Cell><Image size="tiny" src={organization.image}></Image></Table.Cell>
                <Table.Cell>{ organization.id }</Table.Cell>
                <Table.Cell>{ organization.name }</Table.Cell>
                <Table.Cell>
					<Button onClick={() => {}}>
						Edit
					</Button>
					<Button negative>Delete</Button>
				</Table.Cell>
            </Table.Row>
        )
    });

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
						<Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Manage</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { rows }
                </Table.Body>
				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="4">
							<Button positive icon labelPosition="right" floated="right" >
								Add
								<Icon name="plus" />
							</Button>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
            </Table>
        </div>
    );
};

export default OrganizationList;