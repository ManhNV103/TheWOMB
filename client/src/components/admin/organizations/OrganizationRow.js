import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Confirm, Image, Label } from 'semantic-ui-react'
import { deleteResource } from '../../../services/ApiService';

const OrganizationRow = (props) => {
    const organization = props.organization;
    const history = useHistory();
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }

    const handleDeleteConfirm = async () => {
        setDeleteConfirm(false);

        try {
            await deleteResource(`/organizations/${organization.id}`);

            props.api.setOptions({});
        } catch(e) {

        }
    };

    const handleDeleteCancel = () => setDeleteConfirm(false);

    return (
        <Table.Row>
            <Table.Cell><Image size="tiny" src={organization.image}></Image></Table.Cell>
            <Table.Cell>{ organization.id }</Table.Cell>
            <Table.Cell>{ organization.name }</Table.Cell>
            <Table.Cell>
                {
                    organization.disabled ?
                    <Label color="red">Disabled</Label> :
                    <Label color="green">Enabled</Label>
                }
            </Table.Cell>
            <Table.Cell>
                <Button onClick={() => history.push(`/admin/organizations/${organization.id}`)}>
                    Edit
                </Button>
                <Button negative onClick={showDeleteConfirm}>Delete</Button>
                <Confirm
                    header="Confirm"
                    content="Are you sure you would like to delete this organization?"
                    open={deleteConfirm}
                    onConfirm={handleDeleteConfirm}
                    onCancel={handleDeleteCancel}
                />
            </Table.Cell>
        </Table.Row>
    );
};

export default OrganizationRow;