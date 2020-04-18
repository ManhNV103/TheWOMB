import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';
import OrganizationRow from './OrganizationRow';
import ApiSegment from '../../common/ApiSegment';
import { ApiContext } from '../../../context/ApiContext';

const OrganizationList = (props) => {
    const { data: organizations, loading } = useContext(ApiContext);
    const history = useHistory();

    let rowsDom = null;

    if(loading) {
        rowsDom = (
            <Table.Row>
                <Table.Cell colSpan="6">
                    <ApiSegment basic vertical loading={loading} />
                </Table.Cell>
            </Table.Row>
        );
    } else {
        const rows = organizations.map(organization => {
            return (
                <OrganizationRow
                    key={organization.id}
                    organization={organization}
                    api={props.api}
                />
            );
        });

        if(rows.length > 0) {
            rowsDom = rows;
        } else {
            rowsDom = (
                <Table.Row>
                    <Table.Cell colSpan="6" className="centered">No organizations found</Table.Cell>
                </Table.Row>
            );
        }
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
						<Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Disabled</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { rowsDom }
                </Table.Body>
				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="5">
							<Button positive icon labelPosition="right" floated="right" onClick={() => history.push('/admin/organizations/add')}>
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