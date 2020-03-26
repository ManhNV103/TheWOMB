import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const SubmissionList = (props) => {

    const rows = props.submissions.map(submission => {
        return (
            <Table.Row>
                <Table.Cell>{ submission.id }</Table.Cell>
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

export default SubmissionList;
