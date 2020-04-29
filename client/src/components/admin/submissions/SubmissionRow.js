import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Confirm } from 'semantic-ui-react'
import { deleteResource } from '../../../services/ApiService';

const OrganizationRow = ({ submission, api }) => {
    const history = useHistory();
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }

    const handleDeleteConfirm = async () => {
        setDeleteConfirm(false);

        try {
            await deleteResource(`/submissions/${submission.id}`);

            api.setOptions({});
        } catch(e) {

        }
    };

    const handleDeleteCancel = () => setDeleteConfirm(false);

    return (
        <Table.Row>
            <Table.Cell>{ submission.id }</Table.Cell>
            <Table.Cell>{ submission.default_fields[0].value }</Table.Cell>
            <Table.Cell>{ submission.default_fields[1].value }</Table.Cell>
            <Table.Cell>{ submission.default_fields[2].value }</Table.Cell>
            <Table.Cell>{ submission.default_fields[3].value }</Table.Cell>
            <Table.Cell>
                <Button onClick={() => history.push(`/admin/submission/${submission.id}`)}>
                    View
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