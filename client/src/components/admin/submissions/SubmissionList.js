import React, { useContext } from 'react';
import { Table } from 'semantic-ui-react';
import ApiSegment from '../../common/ApiSegment';
import { ApiContext } from '../../../context/ApiContext';
import SubmissionRow from './SubmissionRow';

const SubmissionList = (props) => {
    const { data: submissions, loading } = useContext(ApiContext);

    let rowsDom = null;

    if(loading) {
        rowsDom = (
            <Table.Row>
                <Table.Cell colspan="2">
                    <ApiSegment basic vertical loading={loading} />
                </Table.Cell>
            </Table.Row>
        );
    } else {
        const rows = submissions.map(submission => {
            return (
                <SubmissionRow
                    key={submission.id}
                    submission={submission}
                    api={props.api}
                />
            );
        });

        if(rows.length > 0) {
            rowsDom = rows;
        } else {
            rowsDom = (
                <Table.Row>
                    <Table.Cell colspan="2" className="centered">No submissions found</Table.Cell>
                </Table.Row>
            );
        }
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { rowsDom }
                </Table.Body>
            </Table>
        </div>
    );
};

export default SubmissionList;
