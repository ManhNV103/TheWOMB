import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';
import OrganizationRow from './OrganizationRow';

const OrganizationList = (props) => {
    const organizations = props.api.data;
    const history = useHistory();

    const rows = organizations.map(organization => {
        return (
            <OrganizationRow
                key={organization.id}
                organization={organization}
                api={props.api}
            />
        );
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