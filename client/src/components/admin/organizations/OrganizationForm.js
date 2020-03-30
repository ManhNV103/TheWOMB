import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const OrganizationForm = (props) => {
	const org = props.organization;

	const handleSubmit = (e) => {

	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Name</label>
				<Input value={org ? org.name : ''} />
			</Form.Field>
			<Form.Field>
				<label>Image</label>
				<Input type="file" />
			</Form.Field>
			<Form.Field>
				<label>Config File (yaml)</label>
				<Input type="file" />
			</Form.Field>
			<Button primary>Save</Button>
		</Form>
	);
};

export default OrganizationForm;