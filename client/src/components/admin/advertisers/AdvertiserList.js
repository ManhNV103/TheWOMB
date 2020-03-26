import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const AdvertiserList = (props) => {

    const rows = props.advertisers.map(advertiser => {
        return (
            <Table.Row>
                <Table.Cell>{ advertiser.id }</Table.Cell>
                <Table.Cell>{ advertiser.name }</Table.Cell>
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

export default AdvertiserList;