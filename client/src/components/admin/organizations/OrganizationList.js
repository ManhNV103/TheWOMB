import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Icon, Image, Modal } from 'semantic-ui-react';
import { deleteResource } from '../../../services/apiService';

const OrganizationList = (props) => {
    const history = useHistory();

    const deleteOrganization = (id) => {
        deleteResource(`/organizations/${id}`);
    };

    const rows = props.organizations.map(organization => {
        return (
            <Table.Row key={organization.id} onClick={() => history.push(`/admin/organizations/${organization.id}`)}>
				<Table.Cell><Image size="tiny" src={organization.image}></Image></Table.Cell>
                <Table.Cell>{ organization.id }</Table.Cell>
                <Table.Cell>{ organization.name }</Table.Cell>
                <Table.Cell>
					<Button onClick={() => history.push(`/admin/organizations/${organization.id}`)}>
						Edit
					</Button>
                    <Modal trigger={<Button negative>Delete</Button>}>
                        <Modal.Header>Are you sure?</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                Are you sure you would like to delete this organization?
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={() => deleteOrganization(organization.id)}>Delete</Button>
                            <Button>Cancel</Button>
                        </Modal.Actions>
                    </Modal>
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
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        rows.length > 0 ?
                        rows :
                        <Table.Row>
                            <Table.Cell colSpan="5" className="centered">No organizations found</Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>
				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="4">
							<Button positive icon labelPosition="right" floated="right" onClick={() => history.push('/admin/organizations/new')}>
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